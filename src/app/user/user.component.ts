import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {User} from './user.model';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CdkTableModule} from '@angular/cdk/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // tslint:disable-next-line:semicolon

  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource();
  constructor(private router: Router, private userService: AppService) {
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      },
       (err) => {
        if (err) { alert('Seesion Expired, login again!'); this.router.navigateByUrl('/login');
    }
  }
    );
  // console.log(this.dataSource);


  }
  logout(): void {
    window.sessionStorage.removeItem('Authorization');
    alert('Successfully logged out');
    this.router.navigate(['login']);
  }
}

