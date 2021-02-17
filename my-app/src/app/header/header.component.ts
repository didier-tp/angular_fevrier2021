import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from '../bs-util/data/MenuDefinition';
import { LoginService } from '../common/service/login.service';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre : string ="titre par defaut";

  public currentUserRolesLocal : string = null;

  myMenuDefs : MenuDefinition[] = [
    { label : "admin" , 
      children : [
        { label : "login" , path : "ngr-login" } ,
        { label : "login2" , path : "ngr-login2" },
        { divider : true } ,
        { label : "admin-devise" , path : "ngr-admin-devise" , role : "admin"}
      ]
    },
    { label : "basic" , path : "ngr-basic" } , 
    { label : "conversion" , path : "ngr-conversion" } , 
    { label : "welcome" , path : "ngr-welcome" }
    ];

    public couleurFondPrefereeLocale : string = "lightgrey";
    public couleurTexte : string ="black";

    private ajusterCouleurTexteSelonCouleurFond(){
      if(this.couleurFondPrefereeLocale=="blue"){
        this.couleurTexte="white";
      }else{
        this.couleurTexte="black";
      }
    }

    constructor(private _preferencesService : PreferencesService , private _loginService : LoginService) {

      this._loginService.currentUserRoleBs.subscribe(
        (roles:string) => { this.currentUserRolesLocal = roles;}
      );

      //synchronisation de la "copie locale":
      this._preferencesService.couleurFondPrefereeObservable
      .subscribe(
        //callback éventuellement re-déclenchée plusieurs fois:
        (couleurFondPreferee)=>{
            console.log("nouvelle couleurFondPreferee="+couleurFondPreferee);
            this.couleurFondPrefereeLocale=couleurFondPreferee;
            this.ajusterCouleurTexteSelonCouleurFond();
            }
      );
    console.log("dans le constructeur de HeaderComponent , titre=" + this.titre);
   }

  ngOnInit(): void {
    console.log("dans le ngOnInit() de HeaderComponent , titre=" + this.titre);
  }

  
}
