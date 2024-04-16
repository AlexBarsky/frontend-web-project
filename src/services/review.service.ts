import { axiosClassic, instance } from '@/api/api.interceptor';
import { IReview } from '@/types/review.interface';

const REVIEWS = 'reviews';

type TypeData = {
	rating: number;
	text: string;
};

export class ReviewService {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: REVIEWS,
			method: 'GET',
		});
	}

	async getAverageByProduct(productId: string | number) {
		return axiosClassic<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET',
		});
	}

	async addReview(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/add-review/${productId}`,
			method: 'POST',
			data,
		});
	}
}

export default new ReviewService();
