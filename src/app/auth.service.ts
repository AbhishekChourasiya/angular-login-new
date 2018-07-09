import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = { username: ussername, password: password };
    // console.log('attempAuth ::');
    // console.log(credentials);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const options = {
      headers: headers
    };
    return this.http.post<any>('http://localhost:8080/token/generate-token', credentials, options);
  }

}
