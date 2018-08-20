import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../../services/patient.service';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-del-button',
  templateUrl: './del-button.component.html',
  styleUrls: ['./del-button.component.css']
})
export class DelButtonComponent implements OnInit {

  patient: Patient;

  constructor(private route: ActivatedRoute,
              private patientService: PatientService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.chosenPatient.subscribe(patient => {
      this.patientService.getPatient(patient.id).subscribe(patient => {
        console.log(patient);
        this.patient = patient;
      });
    });
  }

  deletePatient() {
    if (confirm('Are you sure you want to delete patient?')) {
      this.patientService.deletePatient(this.patient.id).subscribe(() => {
        window.location.href = '/';
        this.patientService.getPatients().subscribe(patients => {
          this.sharedService.onUpdatedPatients(patients);
        });
      });
    }
  }

}
