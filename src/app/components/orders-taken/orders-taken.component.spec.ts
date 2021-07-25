import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTakenComponent } from './orders-taken.component';

describe('OrdersTakenComponent', () => {
  let component: OrdersTakenComponent;
  let fixture: ComponentFixture<OrdersTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersTakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
