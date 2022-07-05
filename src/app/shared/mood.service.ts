import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mood } from '../models/mood';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8085/moods';

  submitMood(mood: Mood): Observable<object> {
    return this.http.post(`${this.rootURL}`, mood);
  }
}
