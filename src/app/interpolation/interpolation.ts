import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  title = 'Universidad Angular';
  user = {
    name: 'Edwin Morales',
    age: 35,
  };

  sayGreeting() {
    return `Hola, ${this.user.name}`;
  }
}
