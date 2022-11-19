
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import PobresamundialJson from '../json/pobmundial.json';
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
    templateUrl: 'pobresa.html',
    styleUrls: ['pobresa.css'],
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
          ]),
          trigger('column10', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.9s')
            ])
          ]),
          trigger('column11', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 1s')
            ])
          ])
      ]
})

export class PobresaComponent {
      //Poner Json en una tabla
      @Input() currentState;
      displayedColumns: any[] = ['Rank', 'Pais', 'Continent', 'Poblacio_2022', 'Poblacio_2020', 'Poblacio_2010', 'Poblacio_2000', 'Poblacio_1990', 'Area', 'Index_de_Creixement', 'Poblacio_Mundial'];
      dataSource = new MatTableDataSource (PobresamundialJson);
      
  
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