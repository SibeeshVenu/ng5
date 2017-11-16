import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';

const myRoots: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
