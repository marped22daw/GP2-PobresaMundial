import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { IniciComponent } from './inici';
import { EspervidaComponent } from './espervida';
import { FertilitatComponent } from './fertilitat';
import { PobresaComponent } from './pobresa';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';

@NgModule({
  declarations: [
  AppComponent,
  IniciComponent,
  EspervidaComponent,
  FertilitatComponent,
  PobresaComponent,
  BarComponent,
  PieComponent,
  ScatterComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,

    MatListModule,
    MatCardModule,
    MatGridListModule,

    RouterLinkActive,
    RouterLink
  ],
  providers: [],
  bootstrap: [IniciComponent],
})
export class AppModule {}
