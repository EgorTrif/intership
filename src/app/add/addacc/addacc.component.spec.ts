import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccComponent } from './addacc.component';

describe('AddaccComponent', () => {
  let component: AddaccComponent;
  let fixture: ComponentFixture<AddaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
