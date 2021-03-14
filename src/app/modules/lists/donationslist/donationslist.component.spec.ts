import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationslistComponent } from './donationslist.component';

describe('DonationslistComponent', () => {
  let component: DonationslistComponent;
  let fixture: ComponentFixture<DonationslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
