import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {Comment} from '../../models/Comment';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {CommentService} from '../../services/comment.service';
import {SharedService} from '../../services/shared.service';

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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientService,
              private commentService: CommentService,
              private sharedService: SharedService) {
    //listening activated route as observable, in case of different :id path variable value
    this.route.url.subscribe(url => {
      //sending command to router to navigate edit and del named routers in navbar
      this.router.navigate([{
        outlets: {
          editButton: ['edit'],
          delButton: ['del'],
          cancelButton: null
        }
      }], {skipLocationChange: true});

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
    // this.router.navigate([{outlets: {greenOutlet: ['green'], redOutlet: ['red']}}], {skipLocationChange: true});
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
    if (confirm('Are you sure you want to delete this comment?')) {
      this.commentService.deleteComment(id).subscribe(id => {
        const index = this.comments.indexOf(id, 0);
        this.comments.splice(index, 1);
      });
    }
  }
}
