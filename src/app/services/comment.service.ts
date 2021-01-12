import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'api/comments';

  constructor(private httpClient: HttpClient) {
  }

  getComments(number: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.url}/${number}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`${this.url}`, comment);
  }

  deleteComment(id: number): Observable<Comment> {
    return this.httpClient.delete<Comment>(`${this.url}/${id}`);
  }
}
