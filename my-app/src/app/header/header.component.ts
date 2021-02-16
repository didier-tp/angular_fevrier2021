import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from '../bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre : string ="titre par defaut";

  myMenuDefs : MenuDefinition[] = [
    { label : "admin" , 
      children : [
        { label : "login" , path : "ngr-login" } ,
        { label : "login2" , path : "ngr-login2" },
        { divider : true } /*,
        { label : "menu-item3" , path : "path3" }*/
      ]
    },
    { label : "basic" , path : "ngr-basic" } , 
    { label : "conversion" , path : "ngr-conversion" } , 
    { label : "welcome" , path : "ngr-welcome" }
    ];

  constructor(public preferencesService : PreferencesService) {
    console.log("dans le constructeur de HeaderComponent , titre=" + this.titre);
   }

  ngOnInit(): void {
    console.log("dans le ngOnInit() de HeaderComponent , titre=" + this.titre);
  }

  
}
