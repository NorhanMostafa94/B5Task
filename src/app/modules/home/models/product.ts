export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number | null;
  rating: number;
  stock: number | null;
  brand: string;
  category: string;
  thumbnail: string | null;
  images: any[];
}
