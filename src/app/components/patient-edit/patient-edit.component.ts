import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import {SharedService} from '../../services/shared.service';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  today = moment(new Date()).format('YYYY-MM-DD');

  patient: Patient;
  patients: Patient[];

  todaysDay: number;
  patientsBirthday: number;

  constructor(
    private patientService: PatientService,
    private sharedService: SharedService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.todaysDay = new Date().valueOf();
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
    });

    this.route.url.subscribe(url => {
      console.log(+url[1].path);
      this.patientService.getPatient(+url[1].path).subscribe(patient => {
        this.patient = patient;
        console.log(moment(new Date(this.patient.date)).format('YYYY-MM-DD'));
        this.patient.date = moment(new Date(this.patient.date)).format('YYYY-MM-DD');
      });
    });
  }

  editPatient() {
    this.patientService.updatePatient(this.patient).subscribe(patient => {
      this.patients.splice(this.patients.findIndex( p => p.id === patient.id), 1);
      this.patients.unshift(patient);
      this.sharedService.onUpdatedPatients(this.patients);
    });
  }

  updateBirthDateVar() {
    this.patientsBirthday = new Date(this.patient.date).valueOf();
  }
}
