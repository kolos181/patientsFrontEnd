import {Component, OnInit} from '@angular/core';
import $ from 'jquery';
import {SharedService} from '../../services/shared.service';
import {Patient} from '../../models/Patient';
import {Location} from '@angular/common';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name: string;
  age: any;
  yearsOld: string;
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

  patients: Patient[];

  patientSearchQuery: string;
  userClickedOnSearch: boolean = false;

  constructor(private sharedService: SharedService,
              private location: Location,
              private patientService: PatientService) {

  }

  ngOnInit() {

    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
    });

    this.sharedService.chosenPatient.subscribe(patient => {
      this.patient = patient;
      this.name = patient.name;
      this.yearsOld = ' years old';
      const birthdate: any = new Date(patient.date);
      const timeDiff = Date.now() - birthdate;
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    });
  }

  goBack() {
    this.location.back();
  }

  deletePatient() {
    if (confirm('Are you sure you want to delete patient?')) {
      this.patientService.deletePatient(this.patient.id).subscribe(() => {
        window.location.href = '/';
        $(() => {
          $('.list-group-item').removeClass('active');
          $('#patientName, #patientAge').prop('hidden', true);
          $('.btn-warning, .btn-danger, .btn-light').prop('hidden', true);
        });
        this.patientService.getPatients().subscribe(patients => {
          this.sharedService.onUpdatedPatients(patients);
        });
      });
    }
  }

  onEnteringSearchField() {
    this.userClickedOnSearch = true;
  }

  //update patient list to it's default state (meaning without search results)
  onLeavingSearchField() {
    this.patientSearchQuery = '';
    //displaying patients back again. Turning switcher to false
    this.sharedService.onNotFoundPatients(false);
    this.sharedService.onUpdatedPatients(this.patients);
  }

  patientSearch() {
    if (this.userClickedOnSearch && this.patientSearchQuery === '') {
      this.sharedService.onNotFoundPatients(false);
      this.sharedService.onUpdatedPatients(this.patients);
    }


    if (this.patientSearchQuery !== '') {
      this.patientService.searchPatientByName(this.patientSearchQuery).subscribe(patientsSearchResult => {
        if (patientsSearchResult.length == 0) {
          this.sharedService.onNotFoundPatients(true);
        } else {
          this.sharedService.onNotFoundPatients(false);
          this.sharedService.onUpdatedPatients(patientsSearchResult);
        }
      });
    }
  }
}
