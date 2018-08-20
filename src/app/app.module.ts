import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { CancelButtonComponent } from './components/navbar-buttons/cancel-button/cancel-button.component';
import { DelButtonComponent } from './components/navbar-buttons/del-button/del-button.component';
import { EditButtonComponent } from './components/navbar-buttons/edit-button/edit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientsComponent,
    PatientAddComponent,
    PatientInfoComponent,
    PatientEditComponent,
    CancelButtonComponent,
    DelButtonComponent,
    EditButtonComponent
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
