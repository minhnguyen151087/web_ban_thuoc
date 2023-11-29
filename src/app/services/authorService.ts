import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  // static httpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   // 'Device-Id': Math.random().toString(),
  //   // 'Device-Id': null,
  // }).append('Access-Control-Allow-Headers', 'Content-Type')
  //   .append('Access-Control-Allow-Methods', 'POST')
  //   .append('Access-Control-Allow-Origin', '*');
  // static options = {headers: AuthorService.httpHeaders};
  UserName;
  adduser = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http: HttpClient) {}

  postuser(data: any) {
    return this.http.post<any>('http://localhost:4200/api/register', data);
  }
  login(data: any) {
    return this.http.post<any>('http://localhost:4200/api/signin', data);

  }
}
