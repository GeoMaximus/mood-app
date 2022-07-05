import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8085/users/save';

  login(user:User):Observable<object> {
    // console.log(user);
    return this.http.post(`${this.rootURL}`,user);
  }
}
