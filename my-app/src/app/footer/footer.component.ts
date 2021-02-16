import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
