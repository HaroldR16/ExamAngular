import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoriesDetailComponent } from './factories-detail/factories-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    component : LoginComponent,
    path: '',
  },
  {
    component : LoginComponent,
    path: 'login',
  },
  {
    component : HomeComponent,
    path: 'home',
  },
  {
    component : FactoriesDetailComponent,
    path: 'detail',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
