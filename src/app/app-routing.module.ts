import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './views/about/about.component';
import { IndexComponent } from './views/index/index.component';
import { CounterComponent } from './views/counter/counter.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

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
