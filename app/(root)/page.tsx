import ProductList from '@/components/shared/Product/ProductList'
import sampleData from '@/db/sample-data'

export const metadata = {
	title: 'Home',
}

const HomePage = () => {
	return (
		<>
			<ProductList data={sampleData} title="Newest Arrivals" limit={4} />
		</>
	)
}

export default HomePage
