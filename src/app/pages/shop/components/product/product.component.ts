import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  isAdmin = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
