import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
	const post = await getData(params.id)

	return { title: `Blog page - ${post.title}` }
}

async function getData(id) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	)

	if (!response.ok) {
	}

	return response.json()
}

export default async function Post({ params }) {
	const post = await getData(params.id)

	if (!post) {
		notFound()
	}

	return (
		<div className='py-10 space-y-5 text-center'>
			<h1 className='text-lg font-bold'>{`${post.id}. ${post.title}`}</h1>
			<p className='max-w-md mx-auto'>{post.body}</p>
		</div>
	)
}
