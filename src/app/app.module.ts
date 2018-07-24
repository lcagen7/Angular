import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, Routes } from "@angular/router";

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ng add @angular/material
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule  } from '@angular/material';
//ng generate @angular/material:material-dashboard --name components/home/Dashboard
import { NavigationBarComponent } from './components/home/navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
//ng generate @angular/material:material-dashboard --name components/home/Dashboard
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
//ng generate @angular/material:material-table components/SampleTable
import { SampleTableComponent } from './components/sample-table/sample-table.component';
import { LoginComponent } from './components/login/login/login.component';
import { ModelDialogComponent } from './components/common/model-dialog/model-dialog.component';

const appRoutes : Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent}
]

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
    HeaderSubjectComponent,
    NavigationBarComponent,
    SampleTableComponent,
    DashboardComponent,
    LoginComponent,
    ModelDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule 
  ],
  providers: [
  ],
  entryComponents: [
    ModelDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
