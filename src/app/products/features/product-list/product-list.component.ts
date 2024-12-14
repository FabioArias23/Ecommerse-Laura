import { Component, inject, } from '@angular/core';
import { ProductsStateService } from '../../data-access/product-state.service';
import { ProductsService } from '../../data-access/product.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';



@Component({
  selector: 'app-product-list',
  imports:[ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ ProductsStateService,ProductsService],

// No necesitas agregarlo aquí si está en 'providedIn: root'.
})
export default class ProductListComponent {

  productsState = inject(ProductsStateService)

changePage(){
  this.productsState.changePage$.next(2)
}

}
