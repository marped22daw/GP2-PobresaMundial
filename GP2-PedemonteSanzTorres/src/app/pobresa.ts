
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import PobresamundialJson from './json/pobmundial.json';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-root',
    templateUrl: 'pobresa.html',
    styleUrls: ['pobresa.css']
})

export class PobresaComponent {
      //Poner Json en una tabla
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