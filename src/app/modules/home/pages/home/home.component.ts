import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from 'src/app/shared/actions/cart/cart.actions';
import {
  IProduct,
  IProductsRequestPayload,
  IProductsRequestResponse,
} from '../../models';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  products: IProduct[] = [];
  productsRequestPayload: IProductsRequestPayload = {
    search: '',
    limit: 10,
    skip: 0,
  };
  total: number = 0;
  constructor(
    private homeService: HomeService,
    private store: Store<{ count: number }>
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  /**
   * `addToCart()`
   * @description to add item to cart
   */
  addToCart(): void {
    this.store.dispatch(increment());
  }

  /**
   * `getCategories()`
   * @description to get categories
   */
  getCategories(): void {
    this.homeService.getCategories().subscribe({
      next: (res: string[]) => (this.categories = res),
      error: () => {},
    });
  }

  getProducts(): void {
    this.homeService.getProducts(this.productsRequestPayload).subscribe({
      next: (res: IProductsRequestResponse) => {
        this.products = this.products.concat(res.products);
        this.total = res.total;
      },
    });
  }

  /**
   * `onLoadMore()`
   * @description to load more products
   */
  onLoadMore(): void {
    if (this.products.length === this.total) return;
    this.productsRequestPayload.skip += 10;
    this.getProducts();
  }

  /**
   * `getProductsByCategory()`
   * @description to get products by category
   * @param category {string}
   */
  getProductsByCategory(category: string): void {
    this.resetPayload();
    this.homeService.getProductByCategory(category).subscribe({
      next: (res: IProductsRequestResponse) => {
        this.products = res.products;
        this.total = res.total;
      },
    });
  }

  /**
   * `resetPayload()`
   * @description reset payload and products
   */
  resetPayload(): void {
    this.productsRequestPayload.skip = 0;
    this.products = [];
    this.total = 0;
  }
}
