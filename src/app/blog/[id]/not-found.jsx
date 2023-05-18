import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col gap-5 py-10 text-center'>
			<p>Could not find requested resource</p>
			<Link href='/'>go home</Link>
		</div>
	)
}
