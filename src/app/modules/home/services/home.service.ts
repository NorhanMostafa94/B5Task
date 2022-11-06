import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { APIURL } from 'src/assets/config/http/api-url';
import { IProductsRequestPayload, IProductsRequestResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpService: HttpService) {}

  getCategories(): Observable<string[]> {
    const url = APIURL.home.categories;
    return this.httpService.get(url);
  }

  getProducts(
    payload: IProductsRequestPayload
  ): Observable<IProductsRequestResponse> {
    const url = APIURL.home.all;
    const finalUrl = `${url}?q=${payload.search}&limit=${payload.limit}&skip=${payload.skip}`;
    return this.httpService.get(finalUrl, payload);
  }

  getProductByCategory(
    category: string
  ): Observable<IProductsRequestResponse> {
    const url = `${APIURL.home.byCategory}/${category}`;
    return this.httpService.get(url);
  }
}
