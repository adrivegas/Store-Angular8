import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Store';

  names = ['Adriana', 'Violeta', 'Isabella'];

  addName() {
    this.names.push('Nuevo nombre');
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
