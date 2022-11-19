import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
    .c {
      display: grid;
      gap: 1rem;
    } 
  `]
})
export class AboutComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
