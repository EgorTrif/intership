import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddonComponent } from './adddon.component';

describe('AdddonComponent', () => {
  let component: AdddonComponent;
  let fixture: ComponentFixture<AdddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
