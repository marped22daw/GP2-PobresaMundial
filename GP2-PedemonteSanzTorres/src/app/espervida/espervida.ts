import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import EspervidaJson from '../json/espervida.json';
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
import { delay } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './espervida.html',
    styleUrls: ['./espervida.css'],
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
              animate('300ms 0.2s')
            ])
          ]),
          trigger('column3', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.4s')
            ])
          ]),
          trigger('column4', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.6s')
            ])
          ]),
          trigger('column5', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.8s')
            ])
          ])
      ]
})


export class EspervidaComponent {
  
    //Poner Json en una tabla
    @Input() currentState;
    displayedColumns: any[] = ['Pais', 'Any', 'Espervida', 'Adult_Mortality', 'Infant_Deaths'];
    dataSource = new MatTableDataSource (EspervidaJson);
    

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