"use client"
import { Quiz } from '@/features/Quiz'
import { quizData } from '@/shared/constants/data-quiz'
import { Section } from '@/shared/ui/Section/Section'
import s from './QuizBlock.module.scss'

export const QuizBlock = () => {

	return(
		<Section className={s.Section}>
			<h2 className={s.Heading}>
				<span >Сделаем вашу кухню</span>
				<span className={s.Heading__bold}>по-настоящему
					<span className={s.Heading__accent}> доброй</span>
				</span>
			</h2>
			<Quiz data={quizData} />
		</Section>
	)
}