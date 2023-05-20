import Link from 'next/link'

export default function RegisterPage() {
	return (
		<div className='flex flex-col items-center py-10'>
			register page
			<div className='py-10'>
				<p>
					Already have an account?{' '}
					<Link
						href='/auth/login'
						className='hover:underline'
					>
						Sign in
					</Link>
				</p>
			</div>
		</div>
	)
}
