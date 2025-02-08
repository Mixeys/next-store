import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export function convertToPlainObject<T>(object: T): T {
	return JSON.parse(JSON.stringify(object))
}
