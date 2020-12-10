import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ChangepComponent} from './components/changep/changep.component';
import {CreateCommentComponent} from './components/create-comment/create-comment.component';
import {Changep2Component} from './components/changep2/changep2.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CreateEntryComponent} from './components/create-entry/create-entry.component';
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
    path: 'user/change/password2',
    component: Changep2Component,
    data: { title: 'Cambiar contraseña' }
  },{
    path: 'user/view/comments',
    component: CommentsComponent,
    data: { title: 'Ver comentarios' }
  },{
    path: 'user/create/comments',
    component: CreateCommentComponent,
    data: { title: 'Crear comentarios' }
  },{
    path: 'user/create/entry',
    component: CreateEntryComponent,
    data: { title: 'Crear entrada' }
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
