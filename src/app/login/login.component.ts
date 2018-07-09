import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {TokenStorage} from '../token.storage';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router,  private authService: AuthService, private token: TokenStorage) {
  }
  ngOnInit() {
  }

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
       // alert(data.token);
        this.router.navigate(['users']);
      },
       (err) => {
        if (err) { alert('Invalid login'); this.router.navigateByUrl('/login');
    }
  }
  );

  }

}
