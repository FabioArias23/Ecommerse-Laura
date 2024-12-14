import { Component, input } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interfaces';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
product = input.required<Product>();
}