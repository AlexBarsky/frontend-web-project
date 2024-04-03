import { IUser } from './user.type';

export interface IReview {
	id: number;
	user: IUser;
	createdAt: string;
	text: string;
	rating: string;
}
