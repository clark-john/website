import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FontsizeDirective } from './directives/fontsize.directive';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

import { IndexComponent, AboutComponent, CounterComponent, NotfoundComponent } from './views';

import { NavbarComponent } from './components/navbar/navbar.component';

const matComponents = [
  MatMenuModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    AboutComponent,
    IndexComponent,
    NavbarComponent,
    NotfoundComponent,
    CounterComponent,
    FontsizeDirective
  ],
  imports: [
    CommonModule,
    ...matComponents,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    AboutComponent,
    IndexComponent,
    NavbarComponent,
    NotfoundComponent,
    CounterComponent
  ]
})
export class ComponentsModule { }
