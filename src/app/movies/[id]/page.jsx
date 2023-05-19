import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getMovie(id) {
	const response = await fetch(
		`https://api.biztv.media/api/v1/films/${id}?append=galleries,isBookmarked,isNotified,seasons&include=country,thriller,genres,actors.photo,comments,series.film,language,formats&_f=json&_l=uz`
	)

	if (!response.ok) {
		return undefined
	}

	return response.json()
}

export default async function Page({ params }) {
	const movie = await getMovie(params.id)

	if (!movie) {
		notFound()
	}

	return (
		<div className='py-10 space-y-5'>
			<h1 className='text-lg font-bold text-center'>{movie.name}</h1>

			<div className='flex gap-5'>
				<div className='basis-1/5'>
					<div className='relative aspect-[4/6]'>
						<Image
							src={movie.vertical_poster.thumbnails.normal.src}
							fill
							className='object-cover w-auto h-auto select-none'
							alt={movie.title}
						/>
					</div>
				</div>

				<div>movie descriptions will be here</div>
			</div>

			{movie.galleries && (
				<div className='space-y-2'>
					<h3 className='text-lg font-semibold'>Kadrlar</h3>

					<ul className='grid grid-cols-4 gap-5'>
						{movie.galleries.slice(0, 4).map((gallery) => {
							return (
								<li>
									<Image
										src={gallery.thumbnails.normal.src}
										draggable={false}
										width={1024}
										height={728}
										alt={gallery.title}
										className='select-none'
									/>
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</div>
	)
}
