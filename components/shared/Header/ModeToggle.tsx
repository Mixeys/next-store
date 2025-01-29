'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, SunMoon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const ModeToggle = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) {
		return null
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
					{theme === 'system' ? <SunMoon /> : theme === 'dark' ? <Moon /> : <Sun />}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem checked={theme === 'system'} onChange={() => setTheme('system')}>
					System
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={theme === 'light'} onChange={() => setTheme('light')}>
					Light
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={theme === 'dark'} onChange={() => setTheme('dark')}>
					Dark
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ModeToggle
