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

@NgModule({
  declarations: [
  AppComponent,
  IniciComponent,
  EspervidaComponent,
  FertilitatComponent,
  PobresaComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [IniciComponent],
})
export class AppModule {}
