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

   public couleurFondPrefereeLocale : string = "lightgrey";

   public listeCouleurs : string[] = [ "lightyellow", "white", "blue",
      "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ;
 
 
   constructor(private _preferencesService : PreferencesService) {
         //synchronisation de la "copie locale":
         this._preferencesService.couleurFondPrefereeObservable
             .subscribe(
               //callback éventuellement re-déclenchée plusieurs fois:
               (couleurFondPreferee)=>{
                   this.couleurFondPrefereeLocale=couleurFondPreferee;}
             );
   }
 
   public onCouleurFondPrefereeLocaleChange(){
     this._preferencesService.couleurFondPreferee=
                     this.couleurFondPrefereeLocale;
   }
 

  ngOnInit(): void {
  }

}
