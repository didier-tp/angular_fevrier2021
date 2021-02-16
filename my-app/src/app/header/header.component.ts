import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from '../bs-util/data/MenuDefinition';

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
    { label : "welcome" , path : "ngr-welcome" }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  
}
