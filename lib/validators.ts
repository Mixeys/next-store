import { z } from 'zod'
import Decimal from 'decimal.js'

export const ProductSchema = z.object({
	name: z.string().min(3, 'Name must be at least 3 characters'),
	slug: z.string().min(3, 'Slug must be at least 3 characters'),
	category: z.string().min(3, 'Category must be at least 3 characters'),
	images: z.array(z.string()).min(1, 'Product must have at least one image'),
	brand: z.string().min(3, 'Brand must be at least 3 characters'),
	description: z.string().min(3, 'Description must be at least 3 characters'),
	stock: z.coerce.number(),
	price: z.custom(
		(val) => {
			try {
				const decimalVal = new Decimal(val)
				return decimalVal.precision() <= 12 && decimalVal.decimalPlaces() <= 2
			} catch (error) {
				console.error(error)
				return false
			}
		},
		{
			message: 'Price must be a decimal with up to 12 digits in total and 2 digits after the decimal point.',
		}
	),
	rating: z.custom(
		(val) => {
			try {
				const decimalVal = new Decimal(val)
				return decimalVal.precision() <= 3 && decimalVal.decimalPlaces() <= 2
			} catch (error) {
				console.error(error)
				return false
			}
		},
		{
			message: 'Rating must be a decimal with up to 3 digits in total and 2 digits after the decimal point.',
		}
	),
	numReviews: z.coerce.number(),
	isFeatured: z.boolean().default(false),
	banner: z.string().nullable(),
})
