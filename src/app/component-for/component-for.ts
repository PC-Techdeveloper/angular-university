import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-component-for',
  imports: [FontAwesomeModule],
  templateUrl: './component-for.html',
  styleUrl: './component-for.css',
})
export class ComponentFor {
  faListCheck = faListCheck;

  title = 'Directiva @For';

  tasks: string[] = ['Aprender Angular', 'Aprender TypeScript', 'Aprender Bootstrap'];

  addTask(newTask: string): void {
    if (newTask) {
      this.tasks.push(newTask);
    }
  }
}
