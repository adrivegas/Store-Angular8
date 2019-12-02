import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'Store';

  names = ['Adriana', 'Violeta', 'Isabella'];

  objeto = {};

  power = 10;

  ngOnInit() {}

  addName() {
    this.names.push('Nuevo nombre');
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
