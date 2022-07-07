import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://jsonplaceholder.typicode.com';;

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  getUser() {
    return this.http.get(this.rootURL + '/users/1');
  }

  getPhotos() {
    return this.http.get(this.rootURL + '/photos');
  }
}
