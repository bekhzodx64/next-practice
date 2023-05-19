import { Montserrat } from 'next/font/google'
import './globals.css'

import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Home',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.className} flex flex-col min-h-screen container overflow-y-scroll`}
			>
				<Header />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
