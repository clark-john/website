import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fontSize]'
})
export class FontsizeDirective implements OnInit {
  @Input() fontSize = "";
  constructor(private el: ElementRef){}
  
  ngOnInit(): void {
    this.el.nativeElement.style.fontSize = this.fontSize;
  }
}
