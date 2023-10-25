import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  @Input() scrollPosition: number = 100;
  @Input() initialColor: string = 'transparent';
  @Input() scrollColor: string = 'white';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollY = window.scrollY;
    console.log('Scroll event detected');
    if (scrollY > this.scrollPosition) {
      this.renderer.setStyle(this.el.nativeElement, 'background', 'white');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background:','transparent');
    }
  }

}
