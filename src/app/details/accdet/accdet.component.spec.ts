import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccdetComponent } from './accdet.component';

describe('AccdetComponent', () => {
  let component: AccdetComponent;
  let fixture: ComponentFixture<AccdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
