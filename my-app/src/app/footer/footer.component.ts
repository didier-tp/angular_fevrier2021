import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public listeHumeurs = [ "humeurIndeterminee" , "bonneHumeur" , "mauvaiseHumeur"];
  public humeur =  "humeurIndeterminee" ; //humeur courante (humeurIndeterminee par defaut)

  @Output()
   public humeurEvent : EventEmitter<{value:string}> = new EventEmitter<{value:string}>();

   public onChangeHumeur(){
     this.humeurEvent.emit({value: this.humeur});
   }

   listeCouleurs : string[] = [ "lightyellow", "white",
   "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ; 

  constructor(public preferencesService : PreferencesService) { }


  ngOnInit(): void {
  }

}
