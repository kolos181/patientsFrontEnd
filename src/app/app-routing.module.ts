import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientAddComponent} from './components/patient-add/patient-add.component';
import {PatientInfoComponent} from './components/patient-info/patient-info.component';
import {PatientEditComponent} from './components/patient-edit/patient-edit.component';
import {AppComponent} from './app.component';
import {EditAndDelButtonsComponent} from './components/navbar-buttons/edit-and-del-buttons/edit-and-del-buttons.component';
import {CancelButtonComponent} from './components/navbar-buttons/cancel-button/cancel-button.component';


const routes: Routes = [
  {path: 'add', component: PatientAddComponent, children: [
      {path: '/editAndDeleteButtons', component: EditAndDelButtonsComponent, outlet: 'editAndDel'},
      {path: '/cancelButton', component: CancelButtonComponent, outlet: 'cancelButton'}
    ]},
  {path: 'edit/:id', component: PatientEditComponent, children: [
      {path: '/editAndDeleteButtons', component: EditAndDelButtonsComponent, outlet: 'editAndDel'},
      {path: '/cancelButton', component: CancelButtonComponent, outlet: 'cancelButton'}
    ]},
  {path: ':id', component: PatientInfoComponent, children: [
      {path: '/editAndDeleteButtons', component: EditAndDelButtonsComponent, outlet: 'editAndDel'},
      {path: '/cancelButton', component: CancelButtonComponent, outlet: 'cancelButton'}
    ]},
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
