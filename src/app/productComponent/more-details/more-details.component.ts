import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../product/product";

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})

export class MoreDetailsComponent {

  @Input() selectedProduct: Product;
  @Input() moreDetailsCurrentPage: string;
  private currentProduct;
  private inPage: string;

  constructor() {
    this.currentProduct = new Product();
    console.log('from constructor ' + this.moreDetailsCurrentPage)
  }

  ngOnChanges(changes: any) {

    let product = changes.selectedProduct.currentValue;
    if (product != undefined && product != null)
    { this.currentProduct = product; }

    let page = changes.moreDetailsCurrentPage.currentValue;
    if (page != undefined) {
      this.inPage = page;
    }
    console.log(changes);
    console.log(page);
    // let productList = changes.productArray.currentValue;
    // let productFromList = productList.find(x=>x.name == product.name);

  }
}
