import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  constructor() {}

  title = 'Store';

  names = ['Adriana', 'Violeta', 'Isabella'];

  power = 10;

  ngOnInit() {}

  addName() {
    this.names.push('Nuevo nombre');
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
