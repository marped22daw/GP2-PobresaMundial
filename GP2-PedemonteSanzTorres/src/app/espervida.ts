import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import EspervidaJson from './json/espervida.json';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-root',
    templateUrl: './espervida.html',
    styleUrls: ['./espervida.css']
})

export class EspervidaComponent {
    //Poner Json en una tabla
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