import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args))
}

const defaultLocale = 'en-US'

const locale = window.context?.locale ?? defaultLocale

//@ts-ignore context exists
const dateFormatter = new Intl.DateTimeFormat(locale, {
  dateStyle: 'short',
  timeStyle: 'short'
  // timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number): string => dateFormatter.format(ms)
