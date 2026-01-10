import { Component } from '@angular/core';
import { ComponenteHijo } from './componente-hijo/componente-hijo';

@Component({
  selector: 'app-decorador-input',
  imports: [ComponenteHijo],
  templateUrl: './decorador-input.html',
  styleUrl: './decorador-input.css',
})
export class DecoradorInput {
  title = 'Decorador @Output en Angular';
  messageInput = 'Hola desde el componente Padre';

  getNotification(msgChild: string): void {
    this.messageInput = msgChild;
  }
}
