import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { ChangepComponent } from './components/changep/changep.component';
import { Changep2Component } from './components/changep2/changep2.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { ViewEntryComponent } from './components/view-entry/view-entry.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { UpdateEntryComponent } from './components/update-entry/update-entry.component';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ChangepComponent,
    Changep2Component,
    CommentsComponent,
    CreateEntryComponent,
    ViewEntryComponent,
    CreateCommentComponent,
    UpdateEntryComponent,
    ViewBlogComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }