import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import FertilitatJson from '../json/fertilitat.json';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-root',
    templateUrl: './fertilitat.html',
    styleUrls: ['./fertilitat.css']
})

export class FertilitatComponent {
    //Poner Json en una tabla
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