import { Component } from '@angular/core';
import { Product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  title = 'Listado de Productos';
  products: Product[] = [
    new Product('Pantalón', 130.0),
    new Product('Camiseta', 10.0),
    new Product('Zapatos', 50.0),
  ];

  descriptionInput: string = '';
  priceInput: number | null = null;

  addProduct(): void {
    if (this.descriptionInput.trim() === '' || this.priceInput === null || this.priceInput <= 0) {
      console.log(`Debes ingresar una descripción y un precio valido...`);
      return;
    }

    const myProduct = new Product(this.descriptionInput, this.priceInput);
    this.products.push(myProduct);

    //clean all fileds for next product
    this.descriptionInput = '';
    this.priceInput = 0;
  }
}
