import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component'
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { title: 'Inicio' }
  },{
    path: 'user/login',
    component: LoginComponent,
    data: { title: 'Registrarse' }
  },{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
