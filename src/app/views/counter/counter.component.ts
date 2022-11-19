import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number = Number(localStorage.getItem("count") ?? 0);
  increment = () => this.count++;

  constructor(){}

  ngOnInit(): void {}
  
  @HostListener("window:unload")
  saveToLocalStorage(){
    localStorage.setItem("count", this.count.toString());
  }
}
