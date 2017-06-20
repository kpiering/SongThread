import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { EtsyListing } from "app/etsy/listing";

@Component({
  selector: 'app-etsy-listing',
  templateUrl: './etsy-listing.component.html',
  styleUrls: ['./etsy-listing.component.css']
})
export class EtsyListingComponent implements OnInit, OnDestroy {
  @Input() listing: EtsyListing;
  imgIndex:number = 0; 
  static timerId: number;

  constructor() { }

  ngOnInit() { }

  hoverOn() {
    this.incrementImage();
    this.start();
  }

  hoverOff() {
    this.stop();
    this.resetImage();
  }

  clearTimer() {
    if (EtsyListingComponent.timerId) {
      window.clearInterval(EtsyListingComponent.timerId);
      EtsyListingComponent.timerId = null;
    }
  }

  start() {
    this.clearTimer();
    EtsyListingComponent.timerId = window.setInterval(() => { this.incrementImage(); }, 1000);
  }

  stop() {
    this.clearTimer();
  }

  incrementImage() {
    this.imgIndex++;
    if (this.imgIndex === this.listing.Images.length) {
      this.imgIndex = 0;
    }
  }

  resetImage()
  {
    this.imgIndex = 0;
  }

  ngOnDestroy() {
    this.clearTimer();
  }

}
