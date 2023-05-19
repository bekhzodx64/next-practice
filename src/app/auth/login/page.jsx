import Link from 'next/link'

export default function Login() {
	return (
		<div className='flex flex-col items-center py-10'>
			login page
			<div>
				<p>
					Don't have an account yet?{' '}
					<Link
						href='/auth/register'
						className='hover:underline'
					>
						Register now
					</Link>
				</p>
			</div>
		</div>
	)
}
