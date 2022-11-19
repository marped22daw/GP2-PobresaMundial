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
import { EspervidaComponent } from './espervida/espervida';
import { FertilitatComponent } from './fertilitat/fertilitat';
import { PobresaComponent } from './pobresa/pobresa';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { BarComponentEspervida } from './bar_espervida/bar.espervida.component';
import { PieComponent } from './pie_espervida/pie.espervida.component';
import { ScatterComponent } from './scatter_fertilitat/scatter.fertilitat.component';
import { PuntsPipe } from './pipes/Pipe_punts';
import { BarComponentPobresa } from './bar_pobresa/bar.pobresa.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselComponent } from './carousel/carousel';
import { PrincipalComponent } from './paginici/principal';
import { PieComponentPobresa } from './pie_pobresa/pie.pobresa.component';
import { BarComponentFertilitat } from './bar_fertilitat/bar.fertilitat.component';
import { ComasPipe } from './pipes/Pipe_comas';
// import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
  AppComponent,
  IniciComponent,
  EspervidaComponent,
  FertilitatComponent,
  PobresaComponent,
  BarComponentEspervida,
  BarComponentPobresa,
  PieComponent,
  ScatterComponent,
  PuntsPipe,
  ComasPipe,
  CarouselComponent,
  PrincipalComponent,
  PieComponentPobresa,
  BarComponentFertilitat
  
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
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    // MaterialExampleModule, 

    MatListModule,
    MatCardModule,
    MatGridListModule,

    NgImageSliderModule,

    RouterLinkActive,
    RouterLink
  ],
  providers: [],
  bootstrap: [IniciComponent],
})
export class AppModule {}
