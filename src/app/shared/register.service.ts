import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8085/process_register';

  getManagers():Observable<object> {
    return this.http.get(`${this.rootURL}/managers`);
  }

  register(user:User):Observable<object> {
    // console.log(user);
    return this.http.post(`${this.rootURL}`,user);
  }
}
