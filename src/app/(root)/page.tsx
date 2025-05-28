import { AboutBlock } from '@/shared/blocks/AboutBlock/AboutBlock'
import { CallMeasurerBlock } from '@/shared/blocks/CallMesaurerBlock/CallMesaurerBlock'
import { CasesBlock } from '@/shared/blocks/CasesBlock/CasesBlock'
import { ContactsBlock } from '@/shared/blocks/ContactsBlock/ContactsBlock'
import { FooterBlock } from '@/shared/blocks/FooterBlock/FooterBlock'
import { MakeKindBlock } from '@/shared/blocks/MakeKindBlock/MakeKindBlock'
import { PromoBlock } from '@/shared/blocks/PromoBlock/PromoBlock'
import { QuizBlock } from '@/shared/blocks/QuizBlock/QuizBlock'
import { TestimonialsBlock } from '@/shared/blocks/TestimonialsBlock/TestimonialsBlock'

export default async function Page() {
	const rawData = await fetch(`${process.env.SITE_DOMAIN}/api/`)
	const data = await rawData.json()
	return (
		<main>
			<QuizBlock/>
			<CasesBlock data={data.cases} />
			<MakeKindBlock/>
			<AboutBlock/>
			<PromoBlock data={data.promos}/>
			<TestimonialsBlock data={data.testimonials}/>
			<CallMeasurerBlock/>
			<ContactsBlock/>
			<FooterBlock/>
		</main>
	)
}