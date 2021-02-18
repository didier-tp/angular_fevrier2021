import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from '../basic.component';

import { CalculatriceComponent } from './calculatrice.component';

describe('CalculatriceComponent', () => {
  let component: CalculatriceComponent;
  let fixture: ComponentFixture<CalculatriceComponent>;

  let elA : HTMLInputElement;
  let elB : HTMLInputElement;
  let elBtnAdd : HTMLInputElement;
  let elRes : HTMLElement;

  const routes: Routes = [
    { path: 'ngr-basic', component: BasicComponent ,
       children: [
          { path: 'calculatrice/:mode', component: CalculatriceComponent },
          { path: '', redirectTo: 'calculatrice/simple', pathMatch: 'prefix'}
     ] }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatriceComponent , BasicComponent ] ,
      imports : [ FormsModule , RouterModule.forRoot(routes)]  /* pour le bon fonction de [(ngModel)] */
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    elA = fixture.debugElement.query(By.css('input[name=a]')).nativeElement;
    elB = fixture.debugElement.query(By.css('input[name=b]')).nativeElement;
    elBtnAdd = fixture.debugElement.query(By.css("input[value='+']")).nativeElement;
    elRes = fixture.debugElement.query(By.css('#res')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addition', () => {
    //component.a = 5; //manipuler le coté ts
    elA.value="5";  //manipuler le coté .html
    elA.dispatchEvent(new Event('input')); 
    //component.b=6;
    elB.value="6";  //manipuler le coté .html
    elB.dispatchEvent(new Event('input'));
    elBtnAdd.dispatchEvent(new Event('click')); //déclencher evt click
    fixture.detectChanges();
    let valRes : string = elRes.textContent;
    console.log("valRes="+valRes);
    expect(valRes).toBe("11");
  });
});

// ng test --include=**/calculatrice/*.spec.ts
