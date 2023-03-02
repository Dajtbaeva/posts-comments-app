import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private URL = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}

  getComments(userId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.URL + `?postId=${userId}`, {
      params: new HttpParams(),
    });
  }
}
