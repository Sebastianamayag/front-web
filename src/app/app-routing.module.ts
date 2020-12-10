import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { ChangepComponent } from './components/changep/changep.component';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { title: 'Inicio' }
  },{
    path: 'user/login',
    component: LoginComponent,
    data: { title: 'Iniciar Sesión' }
  },{
    path: 'user/register',
    component: RegisterComponent,
    data: { title: 'Registrarse' }
  },{
    path: 'user/change/password',
    component: ChangepComponent,
    data: { title: 'Cambiar contraseña' }
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
