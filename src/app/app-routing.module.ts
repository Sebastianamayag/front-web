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
import {ViewEntryComponent }from './components/view-entry/view-entry.component';
import {UpdateEntryComponent} from './components/update-entry/update-entry.component';
import {AdminComponent} from './components/admin/admin.component';

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
    path: 'view/entry/:id',
    component: ViewEntryComponent,
    data: { title: 'Ver entrada' }
  },{
    path: 'user/update/entry/:id',
    component: UpdateEntryComponent,
    data: { title: 'Actualizar entrada' }
  },{
    path: 'view/admin/entry',
    component: AdminComponent,
    data: { title: 'Contenido' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
