import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Devise } from '../common/data/devise';
import { DeviseService } from '../common/service/devise.service';

import { ConversionComponent } from './conversion.component';

describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;

  let elMontant : HTMLInputElement;
  let elCodeDeviseSource : HTMLSelectElement;
  let elCodeDeviseCible : HTMLSelectElement;
  let elBtnConv : HTMLInputElement;
  let elMontantconverti : HTMLElement;

  let deviseServiceWithinTest : DeviseService;
  let spy1 : jasmine.Spy; 
  let spy2 : jasmine.Spy; 

  let jeuxDeDevises : Devise[] = [
    new Devise('EUR','euro',1.0),
    new Devise('USD','dollar',1.1),
    new Devise('GBP','livre',0.9),
    new Devise('JPY','yen',120)
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionComponent ] ,
      imports : [ FormsModule , HttpClientModule ] , /* pour le bon fonction de [(ngModel)] */
      providers : [ DeviseService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionComponent);
    component = fixture.componentInstance;
    deviseServiceWithinTest = fixture.debugElement.injector.get(DeviseService);
    spy1 = spyOn(deviseServiceWithinTest, 'convertir$')
        .and.callFake(function(montant : number, codeDeviseSource :string , codeDeviseCible : string){
          console.log("montant="+ montant + "codeDeviseSource =" + codeDeviseSource + "codeDeviseCible =" + codeDeviseCible)
          let coeff =  Math.random();//coefficient aleatoire ici (simple simulation)
          let montantConverti = montant * coeff;  
          if(codeDeviseSource=="EUR" && codeDeviseCible=="USD")    
              montantConverti=217.39;              
          return of(montantConverti) //version temporaire (cependant asynchrone)
                .pipe(
                     delay(222) //simuler une attente de 222ms 
                );
      });

     

      spy2 = spyOn(deviseServiceWithinTest, 'getAllDevises$')
        .and.callFake(function(){
          return of(jeuxDeDevises) //version simulée (cependant asynchrone)
            .pipe(
               delay(111) , //simuler une attente de 111ms ,
               tap ( (tabDev) => { console.log("tabDev" + JSON.stringify(tabDev));})
            );
      });


    fixture.detectChanges();
    elMontant = fixture.debugElement.query(By.css('input[name=montant]')).nativeElement;
    elCodeDeviseSource = fixture.debugElement.query(By.css('select[name=codeDevSource]')).nativeElement;
    elCodeDeviseCible = fixture.debugElement.query(By.css('select[name=codeDevCible]')).nativeElement;
    elBtnConv = fixture.debugElement.query(By.css("input[value=convertir]")).nativeElement;
    elMontantconverti = fixture.debugElement.query(By.css('#montantConverti')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('conversion', fakeAsync(() => {
    component.listeDevises=jeuxDeDevises; //pour compenser l'appel tartif de ngOnInit() , en attendant meilleure solution !!!
    fixture.detectChanges();
    //component.montant = 200; //manipuler le coté ts
    elMontant.value="200";  //manipuler le coté .html
    elMontant.dispatchEvent(new Event('input')); 

    //component.codeDeviseSource="EUR";
    elCodeDeviseSource.value=elCodeDeviseSource.options[0].value;//"EUR";  //manipuler le coté .html
    elCodeDeviseSource.dispatchEvent(new Event('change'));

    //component.codeDeviseCible="USD";
    elCodeDeviseCible.value=elCodeDeviseCible.options[1].value; //"USD" //manipuler le coté .html
    elCodeDeviseCible.dispatchEvent(new Event('change'));

    elBtnConv.dispatchEvent(new Event('click')); //déclencher evt click
    tick(250); //attendre le résultat du traitement asynchrone (simulé ou pas)

    fixture.detectChanges();
    expect(Number(component.montant)).toBe(200);
    expect(component.codeDeviseSource).toBe('EUR');
    expect(component.codeDeviseCible).toBe('USD');
    let valRes : string = elMontantconverti.textContent;
    console.log("valRes="+valRes);
    expect(Number(valRes)).toBeCloseTo(217.4,0.1);
  }));


});

// ng test --include=**/conversion/*.spec.ts   
