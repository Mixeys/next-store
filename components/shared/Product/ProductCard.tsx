import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const ProductCard = ({ product }: { product: any }) => {
    return (
        <Card className='w-full max-w-sm'>
            <CardHeader>
                <Link href={`/product/${product.slug}`}>
                    <Image src={product.images[0]} alt={product.name} height={300} width={300} priority />
                </Link>
            </CardHeader>
            <CardContent>
                <div className='text-sm'>{product.brand}</div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="justify-between flex">
                    <p>{product.rating} Stars</p>
                    {
                        product.stock > 0 ? (
                            <p className='font-bold'>${product.price}</p>
                        ) : (<p className='text-destructive'>Out of stock</p>)
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard