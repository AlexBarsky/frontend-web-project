import { instance } from '@/api/api.interceptor';
import { IPaymentResponse } from '@/types/payment.interface';

const PAYMENT = 'payment';

type TypeData = {
	rating: number;
	text: string;
};

export class PaymentService {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>(PAYMENT, { amount });
	}
}

export default new PaymentService();
