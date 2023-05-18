/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.biztv.media',
				pathanme: 'static/media',
			},
		],
	},
}

module.exports = nextConfig
