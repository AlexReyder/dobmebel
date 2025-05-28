import { ReactNode } from 'react'
import { cn } from '../../utils/common'
import s from './Section.module.scss'
export const Section = ({children, className}: {children: ReactNode, className?: string}) => {
	return(
		<section className={cn(s.Section, className)}>
			{children}
		</section>
	)
}