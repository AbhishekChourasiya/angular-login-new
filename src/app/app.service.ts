import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User , Athelete } from './user/user.model';
import { MatTableDataSource } from '@angular/material';
import { Http, Headers, Response } from '@angular/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {
    users;
    // auth_token;
    constructor(private http: HttpClient) {
        // this.auth_token = window.sessionStorage.getItem('Authorization');
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('Authorization')
          });
     }

    private userUrl = 'http://localhost:8080';
    private atheletesURL = 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json';
    // auth_token = window.sessionStorage.getItem('Authorization');
    public getUsers(): Observable<User[]> {


        return this.http.options<User[]>(this.userUrl + '/user',
        {
            headers: new HttpHeaders().set('Authorization', window.sessionStorage.getItem('Authorization'))
          }
         );
        }

        public getAtheletes(): Observable<Athelete[]> {


            return this.http.get<Athelete[]>(this.atheletesURL);
            }


}
