import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
 version "model-driven" du composant login (avec formaulaire)
 */

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  public myForm: FormGroup;

  public message :string ;

  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
  this.myForm = this._formBuilder.group({
    username: ['admin1', [ Validators.required ,Validators.pattern('^[a-zA-Z].+') ]],
    password: ['pwdadmin1', [Validators.required, Validators.minLength(3) ]],
    roles: ['admin', [Validators.required, ]]
  });
  }

  public onLogin(){
    this.message = "donnees saisies = " + JSON.stringify(this.myForm.value);
 }
 
}
