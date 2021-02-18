import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ConversionComponent } from './conversion.component';

describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;

  let elMontant : HTMLInputElement;
  let elCodeDeviseSource : HTMLSelectElement;
  let elCodeDeviseCible : HTMLSelectElement;
  let elBtnConv : HTMLInputElement;
  let elMontantconverti : HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionComponent ] ,
      imports : [ FormsModule ]  /* pour le bon fonction de [(ngModel)] */
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionComponent);
    component = fixture.componentInstance;
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
    //component.montant = 200; //manipuler le coté ts
    elMontant.value="200";  //manipuler le coté .html
    elMontant.dispatchEvent(new Event('input')); 

    //component.codeDeviseSource="EUR";
    elCodeDeviseSource.value="EUR";  //manipuler le coté .html
    elCodeDeviseSource.dispatchEvent(new Event('change'));

    //component.codeDeviseCible="USD";
    elCodeDeviseCible.value="USD";  //manipuler le coté .html
    elCodeDeviseCible.dispatchEvent(new Event('change'));

    elBtnConv.dispatchEvent(new Event('click')); //déclencher evt click
    tick(250); //attendre le résultat du traitement asynchrone (simulé ou pas)

    fixture.detectChanges();
    let valRes : string = elMontantconverti.textContent;
    console.log("valRes="+valRes);
    expect(Number(valRes)).toBeCloseTo(217.4,0.1);
  }));


});
