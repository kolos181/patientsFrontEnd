import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
import {PatientsComponent} from '../patients/patients.component';
import {SharedService} from '../../services/shared.service';
import $ from 'jquery';
import * as moment from 'moment';

@Component({
  providers: [PatientsComponent],
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})

export class PatientAddComponent implements OnInit {

  today = moment(new Date()).format('YYYY-MM-DD');

  patient: Patient = {
    name: '',
    address: '',
    state: '',
    country: '',
    sex: '',
    date: '',
    id: null,
    createdAt: null,
    updatedAt: null
  };
  todaysDay: number;
  patientsBirthday: number;


  constructor(private patientService: PatientService, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.todaysDay = new Date().valueOf();
    this.router.navigate([{
        outlets: {
          cancelButton: ['cancel'],
          editButton: null,
          delButton: null
        }
      }], {skipLocationChange: true}
    );
  }

  addPatient() {
    this.patientService.addPatient(this.patient).subscribe((patient) => {
        //sending new patient to patients array in PatientsComponent via interService
        this.sharedService.onNewPatient(patient);
        this.router.navigateByUrl(patient.id.toString(), {skipLocationChange: true});

      }
    );
  }

  updateBirthDateVar() {
    this.patientsBirthday = new Date(this.patient.date).valueOf();
  }
}
