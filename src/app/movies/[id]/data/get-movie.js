export default async function getMovie(movieId) {
	const res = await fetch(
		`${process.env.API}/films/${movieId}?append=galleries&include=country,language,formats`
	)

	if (!res.ok) return undefined

	return res.json()
}
