import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtsyListingComponent } from './etsy-listing.component';

describe('EtsyListingComponent', () => {
  let component: EtsyListingComponent;
  let fixture: ComponentFixture<EtsyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtsyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtsyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
