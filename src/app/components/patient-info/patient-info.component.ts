import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {Comment} from '../../models/Comment';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {CommentService} from '../../services/comment.service';
import {SharedService} from '../../services/shared.service';
import $ from 'jquery';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
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

  comments: Comment[];
  newComment: Comment = {
    id: null,
    patient: null,
    comment: null,
    date: null
  };

  constructor(private route: ActivatedRoute,
              private patientService: PatientService,
              private commentService: CommentService,
              private sharedService: SharedService) {
    //listening activated route as observable, in case of different :id path variable value
    this.route.url.subscribe(url => {
      this.patientService.getPatient(+url[0].path).subscribe(patient => {
        this.patient = patient;
        this.sharedService.patNavbarInfo(patient);
      });

      this.commentService.getComments(+url[0].path).subscribe(comments => {
        this.comments = comments;

      });
    });
  }

  ngOnInit() {
    //hiding cancel button, revealing delete and edit
    $(() => {
      $('#patientName, #patientAge').prop('hidden', false);
      $('.btn-light').prop('hidden', true);
      $('.btn-danger').prop('hidden', false);
      $('.btn-warning').prop('hidden', false);
    });
  }

  addComment() {
    const comment: Comment = {comment: this.newComment.comment, patient: this.patient, date: new Date()};
    console.log(this.newComment.comment);
    console.log(this.patient.id);
    this.commentService.addComment(comment).subscribe(comment => {
      this.comments.push(comment);
      this.newComment.comment = '';
    });
  }

  deleteComment(id: number) {
    if (confirm("Are you sure you want to delete this comment?")) {
      this.commentService.deleteComment(id).subscribe(id => {
        const index = this.comments.indexOf(id, 0);
        this.comments.splice(index, 1);
      });
    }
  }
}
