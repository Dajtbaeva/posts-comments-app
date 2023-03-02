import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(userId: string): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(this.URL + `?userId=${userId}`, {
        params: new HttpParams(),
      })
      .pipe(catchError(this.reportError));
  }

  private reportError(error: HttpErrorResponse) {
    alert(error.message);
    return throwError(() => error.message);
  }
}
