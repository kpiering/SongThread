import { Component, OnInit, Input } from '@angular/core';
import { EtsyListing } from "app/etsy/listing";

@Component({
  selector: 'app-etsy-listing',
  templateUrl: './etsy-listing.component.html',
  styleUrls: ['./etsy-listing.component.css']
})
export class EtsyListingComponent implements OnInit {
  @Input() listing: EtsyListing;
  constructor() { }

  ngOnInit() {
  }

}
