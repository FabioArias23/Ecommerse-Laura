
import {  Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Product } from "../../shared/interfaces/product.interfaces";
import { Observable } from "rxjs";

const LIMIT = 5
@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseHttpService {
    getProducts(page: number):Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`,{
      params:{
        limit: page * LIMIT
      }
    });
  }
}
