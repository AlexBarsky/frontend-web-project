import { axiosClassic, instance } from '@/api/api.interceptor';
import { ICategory } from '@/types/category.interface';

const CATEGORIES = 'categories';

export class CategoryService {
	async getAll() {
		return axiosClassic<ICategory[]>({
			url: CATEGORIES,
			method: 'GET',
		});
	}

	async getById(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET',
		});
	}

	async getBySlug(slug: string) {
		return axiosClassic<ICategory>({
			url: `${CATEGORIES}/by-slug/${slug}`,
			method: 'GET',
		});
	}

	async create() {
		return instance<ICategory>({
			url: CATEGORIES,
			method: 'POST',
		});
	}

	async update(id: string | number, categoryName: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: { categoryName },
		});
	}

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE',
		});
	}
}

export default new CategoryService();
