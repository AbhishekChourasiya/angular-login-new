
import { Component, OnInit, ViewChild, AfterViewChecked, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatCell } from '@angular/material';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { ChartsModule, BaseChartDirective } from 'ng2-charts/ng2-charts';
import * as Chart from 'chart.js';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit {
    barChartData1: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40]}];


    private datasets = [
    {
        label: '# of female Votes',
        data: [12, 19, 3, 5, 2, 3]
    },
    {
        label: '# of male Votes',
        data: [22, 13, 13, 5, 8, 3]
    }
];
    private datasets2 = [
    {
        label: '# of female Votes',
        data: [12, 19, 3, 5, 2, 3]
    },
    {
        label: '# of male Votes',
        data: [22, 13, 13, 5, 8, 3]
    }
];

    private labels = ['Kolkata', 'Delhi', 'Mumbai', 'Ranchi', 'Chennai', 'Pune'];

    private options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};


// displayedColumns = ['athlete', 'age', 'country', 'year', 'date', 'sport', 'gold', 'silver', 'bronze', 'total'];
displayedColumns = ['id', 'name', 'progress', 'color'];
dataSource: MatTableDataSource<UserData>;
// dataSource: MatTableDataSource<AtheleteData>;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
users: UserData[];
constructor(private router: Router, private userService: AppService) {
    // Create 100 users
    this.users = [];
    for (let i = 1; i <= 100; i++) { this.users.push(createNewUser(i)); }

    //  Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
    //  alert('constructor');

    // this.userService.getAtheletes().subscribe(
    //     data => {
    //       this.dataSource = new MatTableDataSource(data);
    //     },
    //      (err) => {
    //       if (err) { alert('Seesion Expired, login again!'); this.router.navigateByUrl('/login');
    //   }
    // }
    //   );
}


    private barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
};
    private barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    private barChartType = 'bar';
    private barChartLegend = true;

    private barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '2015' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: '2019(predicted)' }
];

     // events
    private chartClicked(e: any): void {
    console.log(e);
}
updateChart(): any {
    // chart.render();
    // this.barChartData1.data.push(100);
    setTimeout(function () { console.log('updated');  }, 1000);

}

    private chartHovered(e: any): void {
    console.log(e);
}
ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.updateChart();
}


// ngOnInit(): void {
//     this.userService.populateDashboard().subscribe(
//       data => {
//       //  this.dataSource.data = data;
//       this.dataSource = new MatTableDataSource(this.users);
//       },
//        (err) => {
//         if (err) { alert('Seesion Expired, login again!'); this.router.navigateByUrl('/login');
//     }
//   }
//     );
// }

applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    //   alert('apply filter');
}

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name = 'Dr. ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))];
    // alert('return new user');
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}


/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

const NAMES = ['Monica', 'Abhi', 'Abhishek', 'Ashish', 'Amit', 'Jack',
    'Mukesh', 'Thanos', 'Isha', 'Oliver', 'Isabella', 'Jasper',
    'Mikesh', 'Leela', 'Vinay', 'Atul', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}


export interface AtheleteData {
    athlete: string;
    age: number;
    country: string;
    year: number;
    date: string;
    sport: string;
    gold: number;
    silver: number;
    bronze: number;
    total: number;
}
