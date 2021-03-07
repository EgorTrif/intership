import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondetComponent } from './dondet.component';

describe('DondetComponent', () => {
  let component: DondetComponent;
  let fixture: ComponentFixture<DondetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DondetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DondetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
