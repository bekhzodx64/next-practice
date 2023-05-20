export default async function getMovies() {
	const res = await fetch(`${process.env.API}/films?per_page=100`)

	// /films?filter[type]=1&per_page=15&_f=json&_l=uz

	if (!res.ok) return undefined

	return res.json()
}
