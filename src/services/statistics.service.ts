import { instance } from '@/api/api.interceptor';

const STATISTICS = 'statistics';

export type TypeStatisticsResponse = {
	name: string;
	value: number;
}[];

export class StatisticsService {
	async main() {
		return instance<TypeStatisticsResponse>({
			url: `${STATISTICS}/main`,
			method: 'GET',
		});
	}
}

export default new StatisticsService();
