import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-component',
  imports: [],
  template: `
    <h1>{{ titleInlineComponent }}</h1>
    <p>Fuente más grande</p>
  `,
  styles: `
    h1 {
      color: blue,
    }
    p {
      font-size: 28px;
    }
  `,
})
export class InlineComponent {
  titleInlineComponent = 'Componente inline (en línea) 🌈';
}
