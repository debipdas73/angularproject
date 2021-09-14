import { Directive,ElementRef,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
   
   }
   @HostListener('click')OnMouseClick(){
     this.highlight('red');
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    console.log;
  }
  


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   constructor(el: ElementRef) {
//     el.nativeElement.style.backgroundColor = 'yellow';
//   }

// }
