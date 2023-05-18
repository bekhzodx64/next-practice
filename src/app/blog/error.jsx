'use client'

export default function Error({ error, reset }) {
	return (
		<div className='py-10 text-center'>
			<p>Ooops!! {error.message}</p>
			<p onClick={() => reset()}>go back</p>
		</div>
	)
}
