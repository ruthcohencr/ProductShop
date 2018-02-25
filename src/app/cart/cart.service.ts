import { Injectable } from '@angular/core';
// import { Cart } from "./cart";
import { Product } from "../product/product";

@Injectable()

export class CartService {

    // constructor(){
    //     this.cartArray = new CartItem();
    // }
    cartArray=[];

    getProducts(): Product[]{
        return this.cartArray;
    }

    addProduct(product:Product):void{
        this.cartArray.push(product);
    }
    
    // getProductsCart(): Cart[] {
    //     return this.cartArray;
    // }

    // addProducts(cartItem: Cart): void {
    //     let counter = this.cartArray.length;
    //     this.cartArray.push(cartItem);
    // }
}
