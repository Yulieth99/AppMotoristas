import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCompliteComponent } from './order-complite.component';

describe('OrderCompliteComponent', () => {
  let component: OrderCompliteComponent;
  let fixture: ComponentFixture<OrderCompliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCompliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCompliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
