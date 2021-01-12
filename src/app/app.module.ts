import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {PatientInfoComponent} from "./components/patient-info/patient-info.component";
import {PatientAddComponent} from "./components/patient-add/patient-add.component";
import {HttpClientModule} from "@angular/common/http";
import {PatientEditComponent} from "./components/patient-edit/patient-edit.component";
import {PatientsComponent} from "./components/patients/patients.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientsComponent,
    PatientAddComponent,
    PatientInfoComponent,
    PatientEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
