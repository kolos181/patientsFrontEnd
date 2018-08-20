import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientAddComponent} from './components/patient-add/patient-add.component';
import {PatientInfoComponent} from './components/patient-info/patient-info.component';
import {PatientEditComponent} from './components/patient-edit/patient-edit.component';
import {AppComponent} from './app.component';
import {CancelButtonComponent} from './components/navbar-buttons/cancel-button/cancel-button.component';
import {DelButtonComponent} from './components/navbar-buttons/del-button/del-button.component';
import {EditButtonComponent} from './components/navbar-buttons/edit-button/edit-button.component';


const routes: Routes = [

  {
    path: 'cancel',
    component: CancelButtonComponent,
    outlet: 'cancelButton'
  },
  {
    path: 'del',
    component: DelButtonComponent,
    outlet: 'delButton'
  },
  {
    path: 'edit',
    component: EditButtonComponent,
    outlet: 'editButton'
  },
  {
    path: 'add',
    component: PatientAddComponent
  },
  {
    path: 'edit/:id',
    component: PatientEditComponent
  },
  {
    path: ':id',
    component: PatientInfoComponent
  },
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
