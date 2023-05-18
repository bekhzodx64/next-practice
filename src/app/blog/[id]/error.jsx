'use client'

import Link from 'next/link'

export default function Error({ error, reset }) {
	return (
		<div>
			{/* <p>Ooops! Something went wrong, please try again.</p> */}
			<p>{error.message}</p>
			<Link href='/'>go home</Link>
		</div>
	)
}
