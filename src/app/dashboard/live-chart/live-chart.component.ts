import { Component,  Input, OnInit,
   Pipe, ViewChild, ElementRef, AfterContentChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  moduleId: module.id,
  selector: 'app-live-chart',

  styles: [`
    .chart {
      display: block;
    }        .chartWrapper {
            position: relative;

        }

        .chartWrapper > canvas {
            position: absolute;
            left: 0;
            top: 0;
            pointer-events:none;
        }
.chartAreaWrapper {

            position: relative;

        }

        .chartAreaWrapper2 {

            position: relative;
            height: 500px;

        }

  `],
  templateUrl: '/live-chart.component.html',
})

export class LiveChartComponent implements OnInit  {
  @Input() speed = 1;
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(0,0,177,0.2)',
      borderColor: 'rgba(0,0,0,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  private datasets = [
    {
      label: '# of Votes',
      data: [12 , 22 , 33, 12 , 22 , 33, 12 , 22 , 33 ]
    }
  ];

  private labels = ['Red'];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  clickData() {
    this.datasets[0]['data'].push(Math.floor(Math.random() * 10) + 5);
     this.labels.push('test');
    // just trying refresh full variable
    this.datasets = this.datasets.slice();

  }

  delete() {
    // this.datasets[0]['data'].splice(0, this.datasets[0]['data'].length - 8);
    this.datasets[0]['data'].splice(0, 1 );
     this.labels.splice( 0 , 1);
    this.datasets = this.datasets.slice();

    if ( this.datasets[0]['data'].length > 15) {
      this.datasets[0]['data'].splice(0, 5 );
      this.labels.splice( 0 , 5);
     this.datasets = this.datasets.slice();
    }
  }

  ngOnInit(): void {
   // this.clickData();
  //  setInterval( () => {this.delete(); }, 1000 * this.speed);
  //  setInterval(() => {this.clickData();  } , 1000 * this.speed);
  }
  func(searchValue: number) {
    let myTimer ;
    let myTimer1;
    if (searchValue && searchValue > 0 && this.speed >= 0) {
      clearInterval(myTimer);
      clearInterval(myTimer1);
       myTimer = setInterval( () => {this.delete(); }, 2000 * this.speed + 1);
       myTimer1 = setInterval(() => {this.clickData();  } , 1000 * this.speed + 1);
      console.log(this.speed);

    }

  }
}
