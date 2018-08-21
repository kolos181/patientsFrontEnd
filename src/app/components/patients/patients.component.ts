import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent implements OnInit {

  patients: Patient[];
  selectedPatient: Patient = {
    name: '',
    address: '',
    state: '',
    country: '',
    sex: '',
    date: new Date(),
    id: null,
    createdAt: null,
    updatedAt: null
  };

  noSuitableResults: boolean = false;


  constructor(private patientService: PatientService, private sharedService: SharedService) {
  }

  ngOnInit() {

    this.sharedService.newPatient.subscribe(patient => {
      this.patients.push(patient);
    });

    this.sharedService.updatedPatients.subscribe(patients => {
      this.patients = patients;
    });

    this.sharedService.patientsSearchSuccess.subscribe(result => {
      this.noSuitableResults = result;
    });

    return this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  onNewPatient(patient: Patient) {
    this.patients.unshift(patient);
  }

  onSelect(patient: Patient) {
    this.selectedPatient = patient;
  }
}
