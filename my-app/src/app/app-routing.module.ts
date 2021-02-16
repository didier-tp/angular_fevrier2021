import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-login', component: LoginComponent },
  { path: 'ngr-login2', component: Login2Component },
  { path: 'ngr-basic', component: BasicComponent }
];

//NB: les path peuvent éventuellement commencer par "ngr-" .
//ceci permet en production, un éventuel filtrage d'url à un niveau
//intermédiaire (ex: nginx)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
