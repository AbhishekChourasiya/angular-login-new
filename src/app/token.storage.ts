import { Injectable } from '@angular/core';


const TOKEN_KEY = 'Authorization';

@Injectable()
export class TokenStorage {

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    // alert('save token start');
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, 'Bearer ' + token);
    // alert(TOKEN_KEY);
   // alert('Authorization token: ' + window.sessionStorage.getItem(TOKEN_KEY));
    // console.log(window.sessionStorage.getItem(TOKEN_KEY));
    // alert('save token ends');
  }

  public getToken(): string {
    // alert('gettoken');
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
