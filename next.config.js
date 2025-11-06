/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Export a static site for GitHub Pages
  output: 'export',
  // Helpful for GitHub Pages directory-style hosting
  trailingSlash: true,
  // Ensure next/image works in static export
  images: { unoptimized: true },
  // Use basePath/assetPrefix in production so assets resolve under /web on GitHub Pages
  basePath: isProd ? '/web' : undefined,
  assetPrefix: isProd ? '/web/' : undefined,
}

module.exports = nextConfig



