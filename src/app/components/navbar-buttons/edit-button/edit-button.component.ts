import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../models/Patient';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  patient: Patient = {
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

  constructor(private patientService: PatientService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.chosenPatient.subscribe(patient => {
      this.patient = patient;
    })
  }

}
