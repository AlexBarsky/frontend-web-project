import UserService from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';

export const useProfile = () => {
	const { user } = useAuth();

	const { data } = useQuery({
		enabled: !!user,
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		// throwOnError: error => {
		// 	console.log(errorCatch(error));
		// 	return true;
		// },
	});

	return { profile: data };
};
