import { ICategory } from './category.type';
import { IReview } from './review.type';

export interface IProduct {
	id: number;
	name: string;
	slug: string;
	description: string;
	price: number;
	reviews: IReview[];
	images: string[];
	createdAt: string;
	category: ICategory;
}

export interface IProductDetails {
	product: IProduct;
}
