'use client'

import { useRouter } from 'next/navigation'

export default function GoBack() {
	const router = useRouter()

	return (
		<button
			type='button'
			onClick={() => router.back()}
			className='place-self-start'
		>
			go back
		</button>
	)
}
