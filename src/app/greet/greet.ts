import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greet',
  imports: [FormsModule],
  templateUrl: './greet.html',
  styleUrl: './greet.css',
})
export class Greet {
  greet = 'Saludo inicial';
}
