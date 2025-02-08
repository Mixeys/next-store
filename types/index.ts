import { z } from 'zod'
import { ProductSchema } from '@/lib/validators'

export type Product = z.infer<typeof ProductSchema> & {
	id: string
	createdAt: Date
}
