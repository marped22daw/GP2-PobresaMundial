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
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
            trigger('changeState', [
            state ('stateLogin', style({transform: 'translateX(-50%)', opacity: 1})),
            state ('stateRegister', style({transform: 'translateX(150%)', opacity: 0, display: 'none'})),
            transition('stateRegister=>stateLogin', [animate('0.3s ease-in')]),
            transition('stateLogin=>stateRegister', [animate('0.3s ease-out')])
        ]),
        trigger('column1', [
            state('in', style({ scale: 1})),
            transition('void => *', [
              style({ scale: 0 }),
              animate('300ms 0.2s')
            ])
          ]),
      ],
})

export class FertilitatComponent {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['Country', 'any2020', 'any2019', 'any2011', 'any2001', 'any1991', 'any1981', 'any1971', 'any1961'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: FertilitatElement | null;
  @Input() currentState;
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

export interface FertilitatElement {
  Country: string;
  any2020: number;
  any2019: number;
  any2011: number;
  any2001: number;
  any1991: number;
  any1981: number;
  any1971: number;
  any1961: number;
  foto: string;
  descripcio: string;
}

const ELEMENT_DATA: FertilitatElement[] = [
  {
    any2020: 1.76,
    Country: 'Armenia',
    any2019: 1.76,
    any2011: 1.72,
    any2001: 1.63,
    any1991: 2.48,
    any1981: 2.5,
    any1971: 3.11,
    any1961: 4.67,
    foto: '../../assets/paises/armenia.png',
    descripcio: 'Armenia és un país de l’Europa sudoriental, situat a la part nord-oriental del Cáucas. Limita al nord amb la República de Artsakh, a l’est amb Azerbaidjan, al sud amb Irán i al sud-est amb Turquia. A l’oest, el país està separat de Georgia per la cordillera del Cáucas. La capital i ciutat més gran és Erevan, amb una població de 1.095.700 habitants (2011).'
  },
  {
    any2020: 1.59,
    Country: 'Cuba',
    any2019: 1.6,
    any2011: 1.67,
    any2001: 1.6,
    any1991: 1.67,
    any1981: 1.85,
    any1971: 3.77,
    any1961: 4.37,
    foto: '../../assets/paises/cuba.png',
    descripcio: 'Cuba és un país de l’Amèrica Central i de l’Oest, situat a la part sud-oriental de la península de Florida, a l’extrem nord-oriental del Mar Carib. Limita al nord amb les Bahamas, a l’est amb el Mar Carib, al sud amb el Mar Carib i el Mar del Nord, i a l’oest amb les Illes Turks i Caicos i el Mar del Nord. La capital i ciutat més gran és La Habana, amb una població de 2.106.169 habitants (2012).'
  },
  {
    any2020: 2.38,
    Country: 'Ecuador',
    any2019: 2.4,
    any2011: 2.59,
    any2001: 3.04,
    any1991: 3.67,
    any1981: 4.61,
    any1971: 6.01,
    any1961: 6.7,
    foto: '../../assets/paises/ecuador.png',
    descripcio: 'Ecuador és un país de l’Amèrica del Sud, situat a la part sud-oriental de l’Amèrica del Sud. Limita al nord amb Colòmbia, al nord-est amb Perú, al sud-est amb Perú i al sud amb el Perú i el Mar del Sud. A l’oest, el país està separat de la República Bolivariana de Venezuela per el canal de la Mona. La capital i ciutat més gran és Quito, amb una població de 2.318.183 habitants (2010).'
  },
  {
    any2020: 2.35,
    Country: 'Morocco',
    any2019: 2.38,
    any2011: 2.58,
    any2001: 2.72,
    any1991: 3.9,
    any1981: 5.57,
    any1971: 6.55,
    any1961: 7.07,
    foto: "../../assets/paises/morocco.png",
    descripcio: 'El Marroc és un país de l’Àfrica del Nord, situat a la part sud-oriental de l’Àfrica del Nord. Limita al nord amb l’oceà Atlàntic, a l’est amb l’oceà Atlàntic i l’oceà Mediterrani, al sud amb l’oceà Mediterrani i l’oceà Atlàntic, i a l’oest amb l’oceà Atlàntic. La capital i ciutat més gran és Rabat, amb una població de 1.024.000 habitants (2014).'
  },
  {
    any2020: 1.6,
    Country: 'Romania',
    any2019: 1.77,
    any2011: 1.47,
    any2001: 1.27,
    any1991: 1.59,
    any1981: 2.36,
    any1971: 2.67,
    any1961: 2.17,
    foto: '../../assets/paises/romania.png',
    descripcio: 'Culturalment, Romania és un illot de llatinitat dins dun oceà eslau. El seu nom ja fa referència a Roma, o bé a la Romània, nom que es donava a la part oriental de l’Imperi Romà i, en època tardana, al mateix imperi en general. Amb un terme similar, Romània, es fa referència a làrea dEuropa on es parlen les llengües romàniques.'
  },
  {
    any2020: 1.22,
    Country: 'Ukraine',
    any2019: 1.23,
    any2011: 1.46,
    any2001: 1.08,
    any1991: 1.78,
    any1981: 1.93,
    any1971: 2.12,
    any1961: 2.17,
    foto: '../../assets/paises/ukraine.png',
    descripcio: 'L’Ucraïna és un país de l’Europa oriental, situat a la part sud-oriental de l’Europa oriental. Limita al nord amb la República de Moldova, a l’est amb la República de Moldova, la República Populară de Ucrània i la Federació de Rusia, al sud amb la Federació de Rusia, al sud-est amb la Federació de Rusia i al sud-oest amb la República Populară de Ucrània. A l’oest, el país està separat de la República Popular de Hongria per el Danubio. La capital i ciutat més gran és Kiev, amb una població de 2.887.974 habitants (2013).'

  },
  {
    any2020: 7,
    Country: 'Thailand',
    any2019: 14.0067,
    any2011: 1.0079,
    any2001: 1.0079,
    any1991: 1.0079,
    any1981: 1.0079,
    any1971: 1.0079,
    any1961: 1.0079,
    foto: '../../assets/paises/thailand.png',
    descripcio: 'Tailàndia és un país de l’Àsia sud-oriental, situat a la part sud-oriental de l’Àsia sud-oriental. Limita al nord amb la República Popular de Laos i la República Popular Democràtica de Laos, a l’est amb la República Popular Democràtica de Laos, la República Popular de Laos i el Mar del Sud, al sud amb el Mar del Sud, al sud-est amb el Mar del Sud i al sud-oest amb el Mar del Sud. A l’oest, el país està separat de la República Popular de Camboya per el Mar del Sud. La capital i ciutat més gran és Bangkok, amb una població de 8.281.056 habitants (2015).'
  },
  {
    any2020: 1.5,
    Country: 'Vietnam',
    any2019: 1.51,
    any2011: 1.54,
    any2001: 1.64,
    any1991: 2.06,
    any1981: 3.2,
    any1971: 5.4,
    any1961: 6.15,
    foto: '../../assets/paises/vietnam.png',
    descripcio: 'Vietnam és un país de l’Àsia sud-oriental, situat a la part sud-oriental de l’Àsia sud-oriental. Limita al nord amb la República Popular de Laos i la República Popular Democràtica de Laos, a l’est amb la República Popular Democràtica de Laos, la República Popular de Laos i el Mar del Sud, al sud amb el Mar del Sud, al sud-est amb el Mar del Sud i al sud-oest amb el Mar del Sud. A l’oest, el país està separat de la República Popular de Camboya per el Mar del Sud. La capital i ciutat més gran és Hanoi, amb una població de 7.127.000 habitants (2015).'
  },
  {
    any2020: 1.7,
    Country: 'China',
    any2019: 1.7,
    any2011: 1.63,
    any2001: 1.6,
    any1991: 2.14,
    any1981: 2.55,
    any1971: 5.4,
    any1961: 5.91,
    foto: '../../assets/paises/china.png',
    descripcio: 'La Xina és un país de l’Àsia oriental, situat a la part sud-oriental de l’Àsia oriental. Limita al nord amb la República Popular de Corea, a l’est amb la República Popular de Corea, la República Popular Democràtica de Corea i la República Popular de Corea, al sud amb la República Popular de Corea, la República Popular Democràtica de Corea i la República Popular de Corea, al sud-est amb la República Popular de Corea, la República Popular Democràtica de Corea i la República Popular de Corea i al sud-oest amb la República Popular de Corea, la República Popular Democràtica de Corea i la República Popular de Corea. A l’oest, el país està separat de la República Popular de Corea per la República Popular Democràtica de Corea. La capital i ciutat més gran és Pekín, amb una població de 21.542.000 habitants (2015).'
  },
  {
    any2020: 1.95,
    Country: 'Uruguay',
    any2019: 1.96,
    any2011: 2.01,
    any2001: 2.21,
    any1991: 2.51,
    any1981: 2.67,
    any1971: 2.94,
    any1961: 2.89,
    foto: '../../assets/paises/uruguay.png',
    descripcio: 'L’Uruguai és un país de l’Amèrica del Sud, situat a la part sud-oriental de l’Amèrica del Sud. Limita al nord amb la República Federativa del Brasil, a l’est amb la República Federativa del Brasil i la República Federativa del Brasil, al sud amb la República Federativa del Brasil, al sud-est amb la República Federativa del Brasil i al sud-oest amb la República Federativa del Brasil. A l’oest, el país està separat de la República Federativa del Brasil per la República Federativa del Brasil. La capital i ciutat més gran és Montevideo, amb una població de 1.319.108 habitants (2015).'
  },
];