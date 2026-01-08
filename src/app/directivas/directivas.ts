import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.html',
  styleUrl: './directivas.css',
})
export class Directivas {
  isAuthenticated: boolean = false;

  toggleAuthentication(): void {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
