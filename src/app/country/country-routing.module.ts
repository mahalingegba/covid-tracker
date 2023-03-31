import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContryPageComponent } from './components/contry-page/contry-page.component';

const routes: Routes = [
  {path:'' ,component:ContryPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
