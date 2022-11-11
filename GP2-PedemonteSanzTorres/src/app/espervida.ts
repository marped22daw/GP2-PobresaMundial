import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import EspervidaJson from './json/espervida.json';

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

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}