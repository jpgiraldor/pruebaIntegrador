import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteInComponent } from './paciente-in/paciente-in.component';
import { DocINComponent } from './doc-in/doc-in.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AgpacientesComponent } from './agpacientes/agpacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteInComponent,
    DocINComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    AgpacientesComponent
  ],
  imports: [
    // HttpClient,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
