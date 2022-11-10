import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FectUserssComponent } from './fect-userss.component';

describe('FectUserssComponent', () => {
  let component: FectUserssComponent;
  let fixture: ComponentFixture<FectUserssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FectUserssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FectUserssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
