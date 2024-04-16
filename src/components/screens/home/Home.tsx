import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { TypePaginationProducts } from '@/types/product.interface';
import Meta from '@/ui/Meta';
import Catalog from '@/ui/catalog/Catalog';
import Layout from '@/ui/layout/Layout';
import { FC } from 'react';

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth();
	const { logout } = useActions();

	console.log(user);

	return (
		<Meta title="Home">
			<Layout>
				{!!user && <button onClick={() => logout()}>Logout</button>}

				<Catalog title="Freshed products" products={products || []} />
			</Layout>
		</Meta>
	);
};

export default Home;
