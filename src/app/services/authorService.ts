import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  UserName;
  adduser = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http: HttpClient) {}

  postuser(data: any) {
    return this.http.post<any>(this.adduser, data);
  }
  login(data: any) {
    console.log("login")
    return this.http.post<any>(this.adduser, data);
  }
}
