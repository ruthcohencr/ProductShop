import { Component, Inject, Input } from '@angular/core';
import { ProductService } from "../product/products.service";
import { Product } from '../product/product';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MoreDetailsComponent } from "./more-details/more-details.component";
import { CartService } from "../cart/cart.service";


@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent {

    private productArray: Product[];
    private selectedProduct: Product;
    private selectedPage: string;
    private productCartArray:Product[];

    constructor(productService: ProductService, cartService:CartService) {
        this.productArray = productService.getProducts();
        this.productCartArray = cartService.getProducts();
    }

    @Input() currentPage: string;

    onChosenItem(selectedProduct) {
        if (this.selectedProduct == selectedProduct) {
            this.selectedProduct = null;
        }
        else {
            this.selectedProduct = selectedProduct;
        }
        // debugger;
    }

    onClick(product: Product) {
        //need to delete from productArray and move to shopping cart

        for (let i = 0; i < this.productArray.length; i++) {
            var tempProduct = this.productArray[i];
            if (tempProduct != null) {
                if (tempProduct.name == product.name) {
                    this.productCartArray.push(tempProduct);
                    this.productArray[i] = null;
                    alert("הפריט " + product.name + " הוסף לסל בהצלחה.");
                    //debugger;
                }
            }
        }

    }

    ngOnChanges(changes: any) {

        let page = changes.currentPage.currentValue;
        if (page != undefined) {
            this.selectedPage = page;
            console.log('selectedPage =page = ' + page);
        }


    }
}
