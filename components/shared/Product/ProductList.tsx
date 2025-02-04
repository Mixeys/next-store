import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({
	data = { products: [] },
	title = '',
	limit = 4,
}: {
	data: { products: object[] }
	title?: string
	limit?: number
}) => {
	const limitedData =
		data?.products?.length && data.products.length > limit ? data.products.slice(0, limit) : data.products

	return (
		<div className="my-10">
			<h1 className="h2-bold mb-4">{title}</h1>
			{data?.products?.length ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{limitedData.map((product: any) => (
						<ProductCard key={product.slug} product={product} />
					))}
				</div>
			) : (
				<p>No products</p>
			)}
		</div>
	)
}

export default ProductList
