import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart/cart.service";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  shoppingCartList=[];

  constructor(cartService:CartService) { 
       this.shoppingCartList = cartService.getProducts();
  }

  ngOnInit() {
  }

}
