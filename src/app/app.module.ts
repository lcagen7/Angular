import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';
import { ObservertestComponent } from './test/observertest/observertest.component';
import { UserDetailComponent } from './components/without-subject/user-detail/user-detail.component';
import { HeaderComponent } from './components/without-subject/header/header.component';
import { UserSubjectDetailComponent } from './components/subject/user-subject-detail/user-subject-detail.component';
import { HeaderSubjectComponent } from './components/subject/header-subject/header-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ObservertestComponent,
    UserDetailComponent,
    HeaderComponent,
    UserSubjectDetailComponent,
    HeaderSubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
