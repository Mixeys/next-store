import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/types'

const ProductList = ({
	data = [],
	title = '',
}: {
	data: Product[]
	title?: string
}) => {

	return (
		<div className="my-10">
			<h1 className="h2-bold mb-4">{title}</h1>
			{data?.length ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{data.map((product: Product) => (
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
