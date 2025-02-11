import Image from 'next/image'
import Link from 'next/link'

import Menu from './Menu'
import { APP_NAME } from '@/lib/constants'

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex-between">
				<div className="flex-start">
					<Link href="/" className="flex-start">
						<Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={48} priority />
						<span className="hidden lg:block font-bold text-2xl ml-2">{APP_NAME}</span>
					</Link>
				</div>
				<div className="flex items-center space-x-2">
					<Menu />
				</div>
			</div>
		</header>
	)
}

export default Header
