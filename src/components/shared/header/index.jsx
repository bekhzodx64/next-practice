import Link from 'next/link'

import { navlinks } from '@/services/data/header-navlinks'

const Header = () => {
	return (
		<header className='flex py-5 bg-sky-300'>
			<nav className='flex-1'>
				<ul className='flex items-baseline justify-center gap-5'>
					{navlinks.map((navlink) => (
						<li key={navlink.id}>
							<Link href={navlink.url}>{navlink.text}</Link>
						</li>
					))}
				</ul>
			</nav>

			<Link href='/auth/login'>login</Link>
		</header>
	)
}

export default Header
