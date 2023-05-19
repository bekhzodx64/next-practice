import Image from 'next/image'
import Link from 'next/link'

async function getMovies() {
	const response = await fetch(
		'https://api.biztv.media/api/v1/films?filter[type]=1&per_page=15&sort=-id&_f=json&_l=uz'
	)

	return response.json()
}

export default async function Movies() {
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
