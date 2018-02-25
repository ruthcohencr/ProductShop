import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  private currentPage:string;
  constructor() { 
    this.currentPage = 'ProductsPage';
  }

  ngOnInit() {
  }

}
