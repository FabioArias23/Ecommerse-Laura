import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interfaces";
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from "./product.service";
import { map, Subject } from "rxjs";

interface State{
  products: Product[];
  status:  'loading'| 'success'| 'error';
  page: number;
}

@Injectable({providedIn: 'root'})
export class ProductsStateService{
  private productsService = inject(ProductsService)

  private initialState: State = {
    products:[],
    status:'loading' as const,
    page: 1,
  };
  changePage$ = new Subject<number>();
  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePage$.pipe(
        map((page)=> ({page, status: 'loading' as const}))
      ),
      this.productsService.getProducts(1).pipe(map(products => ({products, status: 'success' as const}))),
    ],
  });
}
