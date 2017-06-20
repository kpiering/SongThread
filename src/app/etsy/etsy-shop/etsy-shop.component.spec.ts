import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtsyShopComponent } from './etsy-shop.component';

describe('EtsyShopComponent', () => {
  let component: EtsyShopComponent;
  let fixture: ComponentFixture<EtsyShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtsyShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtsyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
