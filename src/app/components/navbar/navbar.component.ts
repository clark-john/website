import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggleControl = new FormControl(localStorage.getItem("theme") === "light" ? false : true);
  constructor(private router: Router){}

  ngOnInit(): void {
    this.switchTheme(this.toggleControl.value ?? false);
    this.toggleControl.valueChanges.subscribe(x => this.switchTheme(x ?? false));
  }

  switchTheme(x: boolean): void {    
    const body = document.body;
    if (x) {
      body.classList.add("darkMode");
      body.style.backgroundColor = "#14151D";
    } else {
      body.classList.remove("darkMode");
      body.style.backgroundColor = "#fff";
    }
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
  @HostListener("window:unload")
  setTheme(){
    localStorage.setItem("theme", this.toggleControl.value ? "dark" : "light");
  }
}
