import Image from 'next/image'
import Link from 'next/link'

import getMovies from './data/get-movies'

export const metadata = {
	title: 'Movies',
}

export default async function MoviesPage() {
	const movies = await getMovies()

	return (
		<div className='grid grid-cols-5 gap-5 py-10'>
			{movies.data.map((movie) => (
				<Link
					href={`/movies/${movie.id}`}
					className='space-y-2'
				>
					<Image
						src={movie.vertical_poster.thumbnails.normal.src}
						height={728}
						width={1024}
						className='object-cover select-none aspect-[2/3]'
						alt={movie.name}
					/>
					<p className='text-center'>{movie.name}</p>
				</Link>
			))}
		</div>
	)
}
