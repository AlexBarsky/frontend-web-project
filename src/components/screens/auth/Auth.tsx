import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { IEmailPassword } from '@/store/user/user.interface';
import Heading from '@/ui/Heading';
import Loader from '@/ui/Loader';
import Meta from '@/ui/Meta';
import Button from '@/ui/button/Button';
import Field from '@/ui/input/Field';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthRedirect } from './useAuthRedirect';
import { validEmail } from './valid-email';

const Auth: FC = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();
	const { login, register } = useActions();
	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register: fromRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IEmailPassword>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data);
		} else {
			register(data);
		}
		reset();
	};

	let currentPageType = type === 'login' ? 'Sign In' : 'Sign Up';
	let otherPageType = type === 'login' ? 'Sign Up' : 'Sign In';

	return (
		<Meta title="Auth">
			<section className="flex h-screen">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="rounded-lg bg-white shadow-sm p-8 m-auto"
				>
					<Heading className="capitalize text-center mb-4">
						{currentPageType}
					</Heading>

					{isLoading ? (
						<Loader />
					) : (
						<>
							<Field
								{...fromRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Invalid email',
									},
								})}
								placeholder="Email"
								error={errors.email?.message}
							/>
							<Field
								{...fromRegister('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Password must be at least 6 characters',
									},
								})}
								type="password"
								placeholder="Password"
								error={errors.password?.message}
							/>
							<Button type="submit" variant="orange">
								{currentPageType}
							</Button>
							{''}

							<div>
								<button
									type="button"
									className="inline-block opacity-20 mt-3 text-sm"
									onClick={() =>
										setType(type === 'login' ? 'register' : 'login')
									}
								>
									{otherPageType}
								</button>
							</div>
						</>
					)}
				</form>
			</section>
		</Meta>
	);
};

export default Auth;
