export default async function getMovies() {
	const res = await fetch(`${process.env.API}/films?per_page=100`)

	if (!res.ok) return undefined

	return res.json()
}
