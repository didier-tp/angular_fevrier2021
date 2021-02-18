import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef = null) {
      el.nativeElement.style.backgroundColor='yellow';
   }

}
