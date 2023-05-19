import Link from 'next/link'

export const metadata = {
	title: 'About',
}

export default function Layout({ children }) {
	return (
		<div className='flex gap-10 py-10'>
			<ul>
				<li>
					<Link href='/about/contact'>contact</Link>
				</li>
				<li>
					<Link href='/about/team'>team</Link>
				</li>
			</ul>
			<div>{children}</div>
		</div>
	)
}
