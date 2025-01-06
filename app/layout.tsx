import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants'

import '@/assets/styles/globals.css'

const inter = Inter({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	description: APP_DESCRIPTION,
	metadataBase: new URL(SERVER_URL),
	title: {
		default: APP_NAME,
		template: `%s | ${APP_NAME}`,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}
