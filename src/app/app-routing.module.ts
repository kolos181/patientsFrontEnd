import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientAddComponent} from './components/patient-add/patient-add.component';
import {PatientInfoComponent} from './components/patient-info/patient-info.component';
import {PatientEditComponent} from './components/patient-edit/patient-edit.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'add', component: PatientAddComponent},
  {path: 'edit/:id', component: PatientEditComponent},
  {path: ':id', component: PatientInfoComponent},
  {path: 'home', component: AppComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
