import { IOrder } from './order.interface';
import { IProduct } from './product.interface';

export interface IUser {
	id: number;
	name: string;
	email: string;
	avatarPath: string;
	phone: string;
}

export interface IExtendedUser extends IUser {
	favorites: IProduct[];
	orders: IOrder[];
}
