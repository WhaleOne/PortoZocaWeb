import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMaintenanceComponent } from './vehicle-maintenance.component';

describe('VehicleMaintenanceComponent', () => {
  let component: VehicleMaintenanceComponent;
  let fixture: ComponentFixture<VehicleMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
