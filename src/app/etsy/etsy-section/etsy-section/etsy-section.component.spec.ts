import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtsySectionComponent } from './etsy-section.component';

describe('EtsySectionComponent', () => {
  let component: EtsySectionComponent;
  let fixture: ComponentFixture<EtsySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtsySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtsySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
