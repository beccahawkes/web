/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || ''

const nextConfig = {
  // Export a static site for GitHub Pages
  output: 'export',
  // Helpful for GitHub Pages directory-style hosting
  trailingSlash: true,
  // Ensure next/image works in static export
  images: { unoptimized: true },
  // Use env so CI can set correct paths for project pages
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
}

module.exports = nextConfig



