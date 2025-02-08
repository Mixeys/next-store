import ProductList from '@/components/shared/Product/ProductList'
import { getLatestProducts } from '@/lib/actions/product.actions'
import { Product } from '@/types'

export const metadata = {
	title: 'Home',
}

const HomePage = async () => {
	const latestProducts: Product[] = await getLatestProducts()

	return (
		<>
			<ProductList data={latestProducts} title="Newest Arrivals" />
		</>
	)
}

export default HomePage
