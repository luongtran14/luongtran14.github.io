import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {SidePageComponent} from "./side-page/side-page.component";

const routes: Routes = [
  {
    path: 'main-page', component: MainPageComponent
  },
  {
    path: 'side-page', component: SidePageComponent
  },
  {
    path: '', redirectTo:'main-page', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
