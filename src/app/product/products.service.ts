import { PRODUCTS } from './mock-product';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {  
    // private productArray = PRODUCTS;
    private productArray;

    constructor() {
        if (localStorage.Products == null) {
            localStorage.setItem('Products', JSON.stringify(PRODUCTS));
            this.productArray = PRODUCTS;
        }
        //products is in localStorage
        else {
          //  localStorage.removeItem("Products");
            let retrievedObject = localStorage.getItem('Products');
            //   this.productArray = localStorage.Products;
            this.productArray  = JSON.parse(retrievedObject);
            console.log('retrievedObject: ', JSON.parse(retrievedObject));  
        }
    }
    getProducts(): Product[] {
        return this.productArray;
    }

    addProduct(p: Product): void {
        this.productArray.push(p);
        localStorage.removeItem("Products");
        localStorage.setItem('Products', JSON.stringify(this.productArray)); 
    }
}
