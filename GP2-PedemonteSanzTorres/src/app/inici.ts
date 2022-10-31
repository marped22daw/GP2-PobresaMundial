import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';


@Component({
    selector: 'app-root',
    templateUrl: './inici.html',
    styleUrls: ['./inici.css']
})

export class IniciComponent {

    @ViewChild(MatSidenav) 
    sidenav!: MatSidenav;

    constructor(private observer: BreakpointObserver) {

    }

    ngAfterViewInit() {
        this.observer.observe(['(max-width: 800px)']).subscribe(result => {
            if (result.matches) {
                this.sidenav.mode = 'over';
                this.sidenav.close();
            } else {
                this.sidenav.mode = 'side';
                this.sidenav.open();
            }
        });
    }

    

}