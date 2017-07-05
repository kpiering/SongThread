import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLinkContainerComponent } from './text-link-container.component';

describe('TextLinkContainerComponent', () => {
  let component: TextLinkContainerComponent;
  let fixture: ComponentFixture<TextLinkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextLinkContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLinkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
