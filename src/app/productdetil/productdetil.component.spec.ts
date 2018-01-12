import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetilComponent } from './productdetil.component';

describe('ProductdetilComponent', () => {
  let component: ProductdetilComponent;
  let fixture: ComponentFixture<ProductdetilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
