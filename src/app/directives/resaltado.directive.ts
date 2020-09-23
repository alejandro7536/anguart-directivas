import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') color: string;

  constructor(
    private el: ElementRef
  ) {
    console.log('directiva llamada');
  }

  @HostListener('mouseenter') mouseEntro() {
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.borderRadius = '5px';
    this.el.nativeElement.style.padding = '10px';
    this.el.nativeElement.append(', haz pasado');
    console.log(this.color);

  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(this.color);
    this.el.nativeElement.style.color = 'white';

    setTimeout(() => {
      this.resaltar(null);
      this.el.nativeElement.style.color = 'black';
    }, 3000);


  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

  }


}
