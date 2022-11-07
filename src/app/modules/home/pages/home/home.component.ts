import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from 'src/app/shared/actions/cart/cart.actions';
import { IFilterOptions, IOptions } from 'src/app/shared/models';
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
  categories: IOptions[] = [];
  products: IProduct[] = [];
  productsRequestPayload: IProductsRequestPayload = {
    search: '',
    limit: 10,
    skip: 0,
  };
  total: number = 0;

  filters: IFilterOptions[] = [];

  constructor(
    private homeService: HomeService,
    private store: Store<{ count: number }>
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getFilters();
    this.getProducts();
  }

  /**
   * `getCategories()`
   * @description to get categories
   */
  getCategories(): void {
    this.homeService.getCategories().subscribe({
      next: (res: string[]) => {
        res.map((category) =>
          this.categories.push({ id: category, name: category })
        );
      },
      error: () => {},
    });
  }

  /**
   * `getFilters()`
   * @description to get filter list
   */
  getFilters() {
    this.homeService.getCategories().subscribe({
      next: (res: string[]) => {
        this.filters = [
          {
            id: 'Bakery',
            options: [],
          },
          {
            id: 'Fruit and vegetables',
            options: [],
          },
          {
            id: 'Meat and fish',
            options: [],
          },
          {
            id: 'Drinks',
            options: [],
          },
          {
            id: 'Kitchen',
            options: [],
          },
          {
            id: 'Special nutrition',
            options: [],
          },
          {
            id: 'Baby',
            options: [],
          },
          {
            id: 'Pharmacy',
            options: [],
          },
        ];
        res.map((category) => {
          let cat = { id: category, name: category };
          this.filters.map((filter) => filter.options.push(cat));
        });
      },
      error: () => {},
    });
  }

  /**
   * `getProducts()`
   * @description to get products
   */
  getProducts(): void {
    this.homeService.getProducts(this.productsRequestPayload).subscribe({
      next: (res: IProductsRequestResponse) => {
        this.products = this.products.concat(res.products);
        this.total = res.total;
      },
    });
  }

  /**
   * `search()`
   * @description to search in products
   * @param searchKeyword {string}
   */
  search(searchKeyword: string) {
    this.productsRequestPayload.search = searchKeyword;
    this.resetPayload();
    this.homeService.getProducts(this.productsRequestPayload).subscribe({
      next: (res: IProductsRequestResponse) => {
        this.products = res.products;
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
  getProductsByCategory(category: IOptions): void {
    this.resetPayload();
    this.homeService.getProductByCategory(category.id).subscribe({
      next: (res: IProductsRequestResponse) => {
        this.products = res.products;
        this.total = res.total;
      },
    });
  }

  /**
   * `addToCart()`
   * @description to add item to cart
   */
  addToCart(): void {
    this.store.dispatch(increment());
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
