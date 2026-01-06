import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  product = {
    description: 'Nuevo Producto',
    price: 100,
  };
  private title = 'Titulo Componente Hijo';
  /* Encapsulamiento de métodos en Angular*/
  get showTitle() {
    return this.title;
  }

  getTitle() {
    return this.title;
  }
}
