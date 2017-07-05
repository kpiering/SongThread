import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderContainerComponent } from './subheader-container.component';

describe('SubheaderContainerComponent', () => {
  let component: SubheaderContainerComponent;
  let fixture: ComponentFixture<SubheaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheaderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
