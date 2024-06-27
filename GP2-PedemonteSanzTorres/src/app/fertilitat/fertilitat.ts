import { Component, ViewChild} from '@angular/core';
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

export class FertilitatComponent{
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['País', '2020', '2019', '2011', '2001', '1991', '1981', '1971', '1961'];
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
  País: string;
  2020: number;
  2019: number;
  2011: number;
  2001: number;
  1991: number;
  1981: number;
  1971: number;
  1961: number;
  foto: string;
}

const ELEMENT_DATA: FertilitatElement[] = [
  {
    2020: 1.76,
    País: 'Armenia',
    2019: 1.76,
    2011: 1.72,
    2001: 1.63,
    1991: 2.48,
    1981: 2.5,
    1971: 3.11,
    1961: 4.67,
    foto: '../../assets/paises/armenia.png'
  },
  {
    2020: 1.59,
    País: 'Cuba',
    2019: 1.6,
    2011: 1.67,
    2001: 1.6,
    1991: 1.67,
    1981: 1.85,
    1971: 3.77,
    1961: 4.37,
    foto: '../../assets/paises/cuba.png'
  },
  {
    2020: 2.38,
    País: 'Ecuador',
    2019: 2.4,
    2011: 2.59,
    2001: 3.04,
    1991: 3.67,
    1981: 4.61,
    1971: 6.01,
    1961: 6.7,
    foto: '../../assets/paises/ecuador.png'
  },
  {
    2020: 2.35,
    País: 'Morocco',
    2019: 2.38,
    2011: 2.58,
    2001: 2.72,
    1991: 3.9,
    1981: 5.57,
    1971: 6.55,
    1961: 7.07,
    foto: "../../assets/paises/morocco.png"
  },
  {
    2020: 1.6,
    País: 'Romania',
    2019: 1.77,
    2011: 1.47,
    2001: 1.27,
    1991: 1.59,
    1981: 2.36,
    1971: 2.67,
    1961: 2.17,
    foto: '../../assets/paises/romania.png'
  },
  {
    2020: 1.22,
    País: 'Ukraine',
    2019: 1.23,
    2011: 1.46,
    2001: 1.08,
    1991: 1.78,
    1981: 1.93,
    1971: 2.12,
    1961: 2.17,
    foto: '../../assets/paises/ukraine.png'

  },
  {
    2020: 7,
    País: 'Thailand',
    2019: 14.0067,
    2011: 1.0079,
    2001: 1.0079,
    1991: 1.0079,
    1981: 1.0079,
    1971: 1.0079,
    1961: 1.0079,
    foto: '../../assets/paises/thailand.png'
  },
  {
    2020: 1.5,
    País: 'Vietnam',
    2019: 1.51,
    2011: 1.54,
    2001: 1.64,
    1991: 2.06,
    1981: 3.2,
    1971: 5.4,
    1961: 6.15,
    foto: '../../assets/paises/vietnam.png'
  },
  {
    2020: 1.7,
    País: 'China',
    2019: 1.7,
    2011: 1.63,
    2001: 1.6,
    1991: 2.14,
    1981: 2.55,
    1971: 5.4,
    1961: 5.91,
    foto: '../../assets/paises/china.png'
  },
  {
    2020: 1.95,
    País: 'Uruguay',
    2019: 1.96,
    2011: 2.01,
    2001: 2.21,
    1991: 2.51,
    1981: 2.67,
    1971: 2.94,
    1961: 2.89,
    foto: '../../assets/paises/uruguay.png'
  },
];