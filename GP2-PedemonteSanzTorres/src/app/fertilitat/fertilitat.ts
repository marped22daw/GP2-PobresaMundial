import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import FertilitatJson from '../json/fertilitat.json';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './fertilitat.html',
    styleUrls: ['./fertilitat.css'],
    animations: [
        // animation triggers go here
        // trigger('changeState', [
        //     state ('stateLogin', style({transform: 'translateX(-50%)', opacity: 1})),
        //     state ('stateRegister', style({transform: 'translateX(150%)', opacity: 0, display: 'none'})),
        //     transition('stateRegister=>stateLogin', [animate('0.3s ease-in')]),
        //     transition('stateLogin=>stateRegister', [animate('0.3s ease-out')])
        // ])
        trigger('column1', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0s')
            ])
          ]),
          trigger('column2', [
            
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.1s')
            ])
          ]),
          trigger('column3', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.2s')
            ])
          ]),
          trigger('column4', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.3s')
            ])
          ]),
          trigger('column5', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.4s')
            ])
          ]),
          trigger('column6', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.5s')
            ])
          ]),
          trigger('column7', [
            
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.6s')
            ])
          ]),
          trigger('column8', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.7s')
            ])
          ]),
          trigger('column9', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.8s')
            ])
          ])
      ]
})

export class FertilitatComponent {
    //Poner Json en una tabla
    @Input() currentState;
    displayedColumns: any[] = ['Country', 'any2020', 'any2019', 'any2011', 'any2001', 'any1991', 'any1981', 'any1971', 'any1961'];
    dataSource = new MatTableDataSource(FertilitatJson);


    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}