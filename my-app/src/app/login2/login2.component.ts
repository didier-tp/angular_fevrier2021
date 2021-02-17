import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/loginResponse';
import { LoginService } from '../common/service/login.service';

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

  constructor(private _formBuilder: FormBuilder, private _loginService : LoginService) {}
  
  ngOnInit() {
  this.myForm = this._formBuilder.group({
    username: ['admin1', [ Validators.required ,Validators.pattern('^[a-zA-Z].+') ]],
    password: ['pwdadmin1', [Validators.required, Validators.minLength(3) ]],
    roles: ['admin', [Validators.required, ]]
  });
  }


  public onLogin(){
    this.message = "donnees saisies = " + JSON.stringify(this.myForm.value);
    let login = new Login();
    //Object.assign(targetObj,sourceObj) 
    //pour copier valeurs des propriétés de sourceObj vers targetObj
    Object.assign(login,this.myForm.value); 
    console.log(this.message);
    this._loginService.postLogin$(login).subscribe(
      {
        next: (loginResponse : LoginResponse)=>{ this.gererLoginResponse(loginResponse); },
        error: (err) => { console.log("error:"+err)}
     }
    );
    
 }

 private gererLoginResponse(loginResponse : LoginResponse){
     console.log("loginResponse:" + JSON.stringify(loginResponse));
     this.message = loginResponse.message;
 }

}
