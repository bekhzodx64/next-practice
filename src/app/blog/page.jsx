import Link from 'next/link'

export const metadata = {
	title: 'Blog page',
}

async function getData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')

	if (!response.ok) {
		throw new Error('Unable to fetch data')
	}

	return response.json()
}

export default async function Blog() {
	const posts = await getData()

	return (
		<div className='py-10'>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link
							href={`/blog/${post.id}`}
							className='hover:underline'
						>{`${post.id}. ${post.title}`}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
