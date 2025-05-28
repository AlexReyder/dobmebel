"use client"
import { Section } from '@/shared/ui/Section/Section'
import Link from 'next/link'
import { Logo } from '../../ui/Icons/Logo/Logo'
import s from './FooterBlock.module.scss'

export const FooterBlock = () => {
	return(
		<footer className={s.Footer}>
			<Section className={s.Section}>
				<Logo/>
				<p className={s.Text}>г.Самара, ул.Молодежная, 2, офис 301</p>
				<p className={s.Text}>
					<span>ИНН: 631806662889</span>
					<br/>
					<span>ОГРНИП: 321631200017121</span>
				</p>
				<Link href='/policy' className={s.Text}>Политика конфиденциальности</Link>
			</Section>
		</footer>
	)
}