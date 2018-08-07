import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {Patient} from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() chosenPatient = new EventEmitter();
  @Output() newPatient = new EventEmitter();
  @Output() updatedPatients = new EventEmitter();
  @Output() patientsSearchSuccess = new EventEmitter();

  constructor() {
  }

  onNotFoundPatients(b: boolean) {
    this.patientsSearchSuccess.emit(b);
  }

  onUpdatedPatients(patients: Patient[]) {
    this.updatedPatients.emit(patients);
  }

  onNewPatient(patient: Patient) {
    this.newPatient.emit(patient);
  }

  patNavbarInfo(patient: Patient) {
    this.chosenPatient.emit(patient);
  }
}
