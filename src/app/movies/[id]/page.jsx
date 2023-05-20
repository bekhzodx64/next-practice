import Image from 'next/image'
import { notFound } from 'next/navigation'

import GoBack from './components/go-back'

export async function generateMetadata({ params }) {
	const movie = await getMovie(params.id)

	if (!movie) {
		return
	}

	return { title: `Movies - ${movie.name}` }
}

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
			<div className='grid grid-cols-3'>
				<GoBack />
				<h1 className='text-lg font-bold place-self-center'>{movie.name}</h1>
			</div>

			<div className='flex gap-5'>
				<div className='basis-1/5'>
					<div className='relative aspect-[4/6]'>
						<Image
							draggable={false}
							src={movie.vertical_poster.thumbnails.normal.src}
							fill
							className='object-cover w-auto h-auto select-none'
							placeholder='blur'
							blurDataURL={movie.vertical_poster.thumbnails.icon.src}
							alt={movie.name}
						/>
					</div>
				</div>

				<div className='basis-4/5'>
					<div className='max-w-md space-y-1'>
						<div className='flex items-baseline gap-3'>
							<div className='font-medium'>Name:</div>
							<div className='border-b border-black border-dotted grow'></div>
							<div className='text-right'>{movie.name}</div>
						</div>
						<div className='flex items-baseline gap-3'>
							<div className='font-medium'>Year:</div>
							<div className='border-b border-black border-dotted grow'></div>
							<div className='text-right'>{movie.year}</div>
						</div>
						<div className='flex items-baseline gap-3'>
							<div className='font-medium'>Language:</div>
							<div className='border-b border-black border-dotted grow'></div>
							<div className='text-right'>{movie.language.language}</div>
						</div>
						<div className='flex items-baseline gap-3'>
							<div className='font-medium'>Rating:</div>
							<div className='border-b border-black border-dotted grow'></div>
							<div className='text-right'>{movie.rate.total}</div>
						</div>
						{movie.formats.length > 0 && (
							<div className='flex items-baseline gap-3'>
								<div className='font-medium'>
									{movie.formats.length > 1 ? 'Formats:' : 'Format:'}
								</div>
								<div className='border-b border-black border-dotted grow'></div>
								<ul className='flex items-baseline gap-2 text-right'>
									{movie.formats.map((format) => (
										<li>{format.name}</li>
									))}
								</ul>
							</div>
						)}
						<div>
							<div className='font-medium'>Description:</div>
							<div className='text-justify'>{movie.description}</div>
						</div>
					</div>
				</div>
			</div>

			{movie.galleries && (
				<div className='space-y-2'>
					<h3 className='text-lg font-semibold'>Kadrlar</h3>

					<ul className='grid grid-cols-4 gap-5'>
						{movie.galleries.slice(0, 4).map((gallery) => {
							return (
								<li key={gallery.id}>
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
