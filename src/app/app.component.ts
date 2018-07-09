import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showLogoutBtn = false;
  constructor(private router: Router) {

  }
  username: string;
  password: string;
  login(): void {
    if (this.username === 'abhishek' && this.password === 'admin') {
      this.router.navigate(['user']);
    } else {
      alert('Invalid credentails');
    }
  }

  logout(): void {
    window.sessionStorage.removeItem('Authorization');
    alert('Successfully logged out');
    this.router.navigate(['login']);
  }


}
