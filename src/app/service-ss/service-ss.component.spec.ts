import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSSComponent } from './service-ss.component';

describe('ServiceSSComponent', () => {
  let component: ServiceSSComponent;
  let fixture: ComponentFixture<ServiceSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
