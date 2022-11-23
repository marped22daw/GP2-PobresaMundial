import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { HostBinding } from '@angular/core';
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
    templateUrl: './inici.html',
    styleUrls: ['./inici.css'],
    animations: [
        // animation triggers go here
        // trigger('changeState', [
        //     state ('stateLogin', style({transform: 'translateX(-50%)', opacity: 1})),
        //     state ('stateRegister', style({transform: 'translateX(150%)', opacity: 0, display: 'none'})),
        //     transition('stateRegister=>stateLogin', [animate('0.3s ease-in')]),
        //     transition('stateLogin=>stateRegister', [animate('0.3s ease-out')])
        // ])
        trigger('flyInOut', [
            state('in', style({ transform: 'translateY(0)' })),
            transition('void => *', [
              style({ transform: 'translateY(-100%)' }),
              animate(300)
            ])
          ])
      ]
})

export class IniciComponent {
    @Input() currentState;
    @ViewChild(MatSidenav) 
    sidenav!: MatSidenav;
    
    constructor(private observer: BreakpointObserver, public router: Router) {

    }
    reloadPage(){
        window.location.reload();
      }
    ngAfterViewInit() {
        this.observer.observe(['']).subscribe(result => {
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
