import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextContainerComponent } from './image-text-container.component';

describe('ImageTextContainerComponent', () => {
  let component: ImageTextContainerComponent;
  let fixture: ComponentFixture<ImageTextContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTextContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
