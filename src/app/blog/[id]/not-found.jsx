import Link from 'next/link'

export default function NotFound() {
	return (
		<div>
			<p>Ooops ! Something went wrong.</p>
			<Link href='/'>go home</Link>
		</div>
	)
}
