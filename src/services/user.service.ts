import { instance } from '@/api/api.interceptor';
import { IExtendedUser, IUser } from '@/types/user.interface';

const USERS = 'users';

type TypeData = {
	email: string;
	password?: string;
	name?: string;
	avatarPath?: string;
	phone?: string;
};

export class UserService {
	async getProfile() {
		return instance<IExtendedUser>({
			url: `${USERS}/profile`,
			method: 'GET',
		});
	}

	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data,
		});
	}

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${USERS}/profile/favorites/${productId}`,
			method: 'PATCH',
		});
	}
}

export default new UserService();
