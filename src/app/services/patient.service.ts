import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  @Input() eventEmitterPatient: EventEmitter<Patient> = new EventEmitter<Patient>();

  fireUpEvent() {
    this.eventEmitterPatient.emit();
  }

  private readonly URL = 'api/patients';

  constructor(private httpClient: HttpClient) {
  }

  public getPatient(id: number): Observable<Patient> {
    const url = `${this.URL}/${id}`;
    return this.httpClient.get<Patient>(url);
  }

  public getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.URL);
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(this.URL, patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(this.URL, patient);
  }

  deletePatient(patient: number | Patient): Observable<Patient> {
    const id = typeof patient === 'number' ? patient : patient.id;
    return this.httpClient.delete<Patient>(`${this.URL}/${id}`);
  }

  searchPatientByName(name: string): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.URL}/search/${name}`);
  }
}
