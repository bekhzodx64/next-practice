/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.biztv.media',
			},
		],
	},
}

module.exports = nextConfig
