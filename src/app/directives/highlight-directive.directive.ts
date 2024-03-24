import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
  standalone: true,
})
export class HighlightDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'purple');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
    this.el.nativeElement.style.fontSize = '20px';
  }

  @HostBinding('style.backgroundColor')
  bgColor = 'yellowGreen';

  @HostBinding('style.cursor')
  cursor: string = 'pointer';

  @HostListener('class.hovered')
  isHovered: boolean = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
    this.el.nativeElement.style.fontSize = '40px';
    console.log('Mouse entered');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
    this.el.nativeElement.style.fontSize = '20px';
    console.log('Mouse Left');
  }
}
