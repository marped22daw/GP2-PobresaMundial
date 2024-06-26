import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';
import PobresamundialJson from '../json/pobmundial.json';

@Component({
    selector: 'app-root',
    templateUrl: 'pobresa.html',
    styleUrls: ['pobresa.css'],
    animations: [
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
export class PobresaComponent implements AfterViewInit {
    @Input() currentState: string = '';
    displayedColumns: string[] = ['Rank', 'Pais', 'Continent', 'Poblacio_2022', 'Poblacio_2020', 'Poblacio_2010', 'Poblacio_2000', 'Poblacio_1990', 'Area', 'Index_de_Creixement', 'Poblacio_Mundial'];
    dataSource = new MatTableDataSource(PobresamundialJson);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
    constructor(private changeDetectorRefs: ChangeDetectorRef) { }
    
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // Ordenar por defecto por Rank y en orden ascendente
        this.sort.active = 'Rank';
        this.sort.direction = 'asc';
        this.sort.sortChange.emit();

        // Mark for check
        this.changeDetectorRefs.detectChanges();
    }
    
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
