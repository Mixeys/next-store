'use client'
import Image from 'next/image'

import { APP_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={100} height={100} />
			<div className="flex flex-col items-center p-5 shadow-lg rounded-lg bg-white dark:bg-gray-800">
				<h1>Not Found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
				<Button variant="outline" onClick={() => (window.location.href = '/')}>
					Go back home
				</Button>
			</div>
		</div>
	)
}

export default NotFoundPage
