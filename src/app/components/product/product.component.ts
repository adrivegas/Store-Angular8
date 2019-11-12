import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChangues');
    console.log(changes);
  }

  addCart() {
    console.log('agregar al carrito');
    this.productClicked.emit(this.product.id);
  }
}
