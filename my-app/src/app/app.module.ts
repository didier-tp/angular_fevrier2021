import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XyComponent } from './basic/xy/xy.component';
import { ZzComponent } from './basic/zz/zz.component';
import { ExponentialPipe } from './common/pipe/exponential.pipe';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsUtilModule } from './bs-util/bs-util.module';
import { ConversionComponent } from './conversion/conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent , 
    XyComponent , 
    ZzComponent, ExponentialPipe, LoginComponent, Login2Component, WelcomeComponent, ConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , HttpClientModule,
    FormsModule , ReactiveFormsModule , TabsModule.forRoot() , BsUtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
