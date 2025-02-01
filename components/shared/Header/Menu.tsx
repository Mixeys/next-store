import Link from 'next/link'
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react'

import ModeToggle from './ModeToggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const ActionBlock = () => {
	return (
		<>
			<ModeToggle />
			<Button asChild variant="ghost">
				<Link href="/cart">
					<ShoppingCart /> Cart
				</Link>
			</Button>
			<Button asChild>
				<Link href="/sign-in">
					<UserIcon /> Sign In
				</Link>
			</Button>
		</>
	)
}

const Menu = () => {
	return (
		<div className="flex justify-end gap-3">
			<nav className="hidden md:flex gap-2 w-full max-w-xs">
				<ActionBlock />
			</nav>
			<nav className="md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<EllipsisVertical />
					</SheetTrigger>
					<SheetContent side="right" className="flex flex-col gap-2 items-start">
						<SheetTitle>Menu</SheetTitle>
						<SheetDescription hidden></SheetDescription>
						<ActionBlock />
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	)
}

export default Menu
