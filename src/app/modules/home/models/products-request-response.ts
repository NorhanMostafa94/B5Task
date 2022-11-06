import { IProduct } from './product';

export interface IProductsRequestResponse {
  products: IProduct[];
  limit: number;
  skip: number;
  total: number;
}
