import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextLinkContainerComponent } from './image-text-link-container.component';

describe('ImageTextLinkContainerComponent', () => {
  let component: ImageTextLinkContainerComponent;
  let fixture: ComponentFixture<ImageTextLinkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTextLinkContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextLinkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
