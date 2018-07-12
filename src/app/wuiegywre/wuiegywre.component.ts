import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2',
  templateUrl: './wuiegywre.component.html',
  styleUrls: ['./wuiegywre.component.css']
})
export class WuiegywreComponent {
  columnDefs = [
    {
      headerName: 'Make',
      children: [
        {
          // tslint:disable-next-line:max-line-length
          headerName: '<app-live-chart></app-live-chart>',
          field: 'make',
          width: 250,
          filter: 'agTextColumnFilter'
        },
      ]
    },
    {
      headerName: 'model',
      children: [
        {
          // tslint:disable-next-line:max-line-length
          headerName: '<img width=110px src="https://static1.squarespace.com/static/5459ec52e4b04d305f68f1ed/t/548a9644e4b0a171f6b28d53/1418368582035/Pattern15.jpg"></img>',
          field: 'model',
          width: 150,
          filter: 'agTextColumnFilter'
        },
      ],
      field: 'model'
    },
    {
      headerName: 'Price',
      children: [
        {
          // tslint:disable-next-line:max-line-length
          headerName: '<img width=110px src="https://static1.squarespace.com/static/5459ec52e4b04d305f68f1ed/t/548a9644e4b0a171f6b28d53/1418368582035/Pattern15.jpg"></img>',
          field: 'price',
          width: 150,
          filter: 'agTextColumnFilter'
        },
      ],
      field: 'price'
    },

  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}
