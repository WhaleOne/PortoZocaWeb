
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleMaintenanceComponent } from './vehicle-maintenance/vehicle-maintenance.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'vehicle-maintenance', component: VehicleMaintenanceComponent}
  ];

  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  }) 
  export class AppRoutingModule {}
  export const routingComponents = [HomeComponent, VehicleMaintenanceComponent]