import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.html',
  styleUrl: './componente-hijo.css',
})
export class ComponenteHijo {
  /* Decorador @Input!: operador non-null assertion */
  // @Input() message!: string;

  /* Decorador @Output */
  @Output() notificationInput = new EventEmitter<string>();

  sendMessage(): void {
    //emitir un evento de tipo string
    this.notificationInput.emit('Mensaje enviado desde el componente hijo con decorador @Output');
  }
}
