import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NewComponent } from './new-component/new-component';
// import { InlineComponent } from './inline-component/inline-component';
// import { Interpolation } from './interpolation/interpolation';
import { Padre } from './padre/padre';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Replicador } from './replicador/replicador';
import { Greet } from './greet/greet';
import { FormsModule } from '@angular/forms';
import { Calculadora } from './calculadora/calculadora';
import { Directivas } from './directivas/directivas';
import { AddTask } from './add-task/add-task';
import { ComponentFor } from "./component-for/component-for";

/* Es recomendable tener todo en un archivo aparte  */
@Component({
  selector: 'app-root',
  imports: [
    Padre,
    MostrarMensaje,
    Replicador,
    Greet,
    FormsModule,
    Calculadora,
    Directivas,
    AddTask,
    ComponentFor
],
  // template: `
  //   <h1>{{ title }}</h1>
  //   <p>{{description}}</p>
  // `,
  // styles: [
  //   `h1 {
  //     color: red;
  //   }`
  // ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = `¡Hola Angular!`;
}
