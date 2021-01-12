import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientAddComponent} from "./components/patient-add/patient-add.component";
import {PatientEditComponent} from "./components/patient-edit/patient-edit.component";
import {PatientInfoComponent} from "./components/patient-info/patient-info.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'add', component: PatientAddComponent},
  {path: 'edit/:id', component: PatientEditComponent},
  {path: ':id', component: PatientInfoComponent},
  {path: 'home', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
