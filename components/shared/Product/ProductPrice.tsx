import { cn } from '@/lib/utils'

const ProductPrice = ({ value, className }: { value: number, className?: string }) => {
    const strValue = value.toFixed(2)
    const [int, decimal] = strValue.split('.')

    return (
        <p className={cn('text-2xl', className)}>
            <span className="text-sm align-super">$</span>
            <span>{int}</span>
            <span className="text-sm align-super">{decimal}</span>
        </p>
    )
}

export default ProductPrice