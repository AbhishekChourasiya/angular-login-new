import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showLogoutBtn = true;
  constructor(private router: Router) {
   // window.sessionStorage.removeItem('Authorization');
  }

  logout(): void {
    window.sessionStorage.removeItem('Authorization');
    window.sessionStorage.setItem('Authorization', null);
    window.sessionStorage.clear();
    alert('Successfully logged out, app comp');
   // window.sessionStorage.removeItem('Authorization');
    this.router.navigate(['login']);
  }


}
