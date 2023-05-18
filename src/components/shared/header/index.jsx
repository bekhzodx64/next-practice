import Link from 'next/link'

import { navlinks } from '@/services/data/header-navlinks'

const Header = () => {
	return (
		<header className='py-5 bg-sky-300'>
			<nav>
				<ul className='flex items-baseline gap-5 justify-center'>
					{navlinks.map((navlink) => (
						<li key={navlink.id}>
							<Link href={navlink.url}>{navlink.text}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
