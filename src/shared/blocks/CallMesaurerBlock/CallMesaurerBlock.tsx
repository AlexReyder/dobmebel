"use client"
import { Section } from '@/shared/ui/Section/Section'
import s from './CallMesaurerBlock.module.scss'

export const CallMeasurerBlock = () => {

	return(
		<Section className={s.Section}>
			<div className={s.Wrapper}>
				<div className={s.Left}>
				<h2 className={s.Heading}>Запишитесь на бесплатный замер и консультацию дизайнера до конца месяца, чтобы получить 30% скидку!</h2>	
				</div> 
			</div>
		</Section>
	)
}
