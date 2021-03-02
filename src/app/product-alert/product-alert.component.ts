import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() product: any;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
