import { IProduct } from './product.type';

export interface ICartItem {
	id: number;
	product: IProduct;
	quantity: number;
	price: number;
}
