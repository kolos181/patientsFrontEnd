import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'patientsFrontEnd2021';

  ngOnInit() {
    $(()=> {
      $('.list-group-item').removeClass('active');
      $('#patientName, #patientAge').prop('hidden', true);
      $('.btn-warning, .btn-danger, .btn-light').prop('hidden', true);
    })
  }
}
