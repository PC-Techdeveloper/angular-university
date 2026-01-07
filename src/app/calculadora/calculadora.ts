import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  title = 'App Calculadora';

  opA: number = 0;
  opB: number = 0;
  result: number = 0;

  add() {
    this.result = this.opA + this.opB;
  }
}
