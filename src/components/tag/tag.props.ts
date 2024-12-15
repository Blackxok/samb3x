import { ReactNode } from 'react'

export interface TagProps {
	size?: 's' | 'm'
	color?: 're' | 'gr' | 'pr'
	children: ReactNode
}
