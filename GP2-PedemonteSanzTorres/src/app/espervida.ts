import { Component } from '@angular/core';
import EspervidaJson from './json/espervida.json';

@Component({
    selector: 'app-root',
    templateUrl: './espervida.html',
    styleUrls: ['./espervida.css']
})

export class EspervidaComponent {
    //Poner Json en una tabla
    displayedColumns: any[] = ['Pais', 'Any', 'Espervida', 'Adult_Mortality', 'Infant_Deaths'];
    dataSource = EspervidaJson;
}