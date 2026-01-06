import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css',
})
export class MostrarMensaje {
  message: string = '';

  showMessage = () => {
    this.message = 'Hola, has hecho clic en el botón!';
  };

  resetMessage = () => {
    this.message = '';
  };
}
