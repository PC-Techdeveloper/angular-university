import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.html',
  styleUrl: './replicador.css',
})
export class Replicador {
  text: string = '';

  updateText(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.text = inputElement.value;
  }
}
