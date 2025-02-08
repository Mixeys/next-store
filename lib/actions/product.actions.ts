'use server'

import { convertToPlainObject } from '../utils'
import { LATEST_PRODUCTS_LIMIT } from '../constants'
import { PrismaClient } from '@prisma/client'

export async function getLatestProducts(limit: number = LATEST_PRODUCTS_LIMIT) {
	const prisma = new PrismaClient()

	const products = await prisma.product.findMany({
		take: limit,
		orderBy: {
			createdAt: 'desc',
		},
	})

	return convertToPlainObject(products)
}
