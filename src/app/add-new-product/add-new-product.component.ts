import { Component, OnInit } from '@angular/core';
import { Product } from "../product/product";
import { NgForm } from "@angular/forms/forms";
import { ProductService } from "../product/products.service";
// import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})

export class RegisterProductComponent {

  private product: Product;
  private productArray: Product[];
  private localProductService:ProductService;
  // productForm: FormGroup;

  registerProduct(form: NgForm) {
    console.log(form.value);

    if (form.valid) {
      this.product.name = form.value.name;
      this.product.price = form.value.price;
      this.product.description = form.value.description;
      this.product.image = form.value.image;
      this.productService.addProduct(this.product);
    }
  }

  constructor(private productService: ProductService) {
    this.product = new Product();
    this.productArray = productService.getProducts();
  }
}
