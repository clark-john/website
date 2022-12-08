import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent, AboutComponent, CounterComponent, NotfoundComponent } from './views';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "about", component: AboutComponent },
  { path: "counter", component: CounterComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
