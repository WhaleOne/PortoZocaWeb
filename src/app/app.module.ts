import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehicleMaintenanceComponent } from './vehicle-maintenance/vehicle-maintenance.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    PanelMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

