import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:'full'
  }
  ,
  {
    path:"home",
    component:HomeComponent
  }
  ,
  {
  path:"details/:currency",
  component:DetailsComponent
  },
  {
    path:"**",
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
