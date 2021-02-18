import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/loginResponse';
import { LoginService } from '../common/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login : Login = new Login();
  public message :string ;
  

  constructor(private _loginService : LoginService , private _router : Router) { }

  public onLogin(){
    this.message = "donnees saisies = " + JSON.stringify(this.login);
    console.log(this.message);
    this._loginService.postLogin$(this.login).subscribe(
      {
        next: (loginResponse : LoginResponse)=>{ this.gererLoginResponse(loginResponse); },
        error: (err) => { console.log("error:"+err)}
     }
    );
    
 }

 private gererLoginResponse(loginResponse : LoginResponse){
     console.log("loginResponse:" + JSON.stringify(loginResponse));
     this.message = loginResponse.message;
     if(loginResponse.status){
       let link = [ '/ngr-admin-devise'];
       this._router.navigate(link); //pour naviguer automatiquement vers admin-devise .
     }
 }

  ngOnInit(): void {
  }

}
