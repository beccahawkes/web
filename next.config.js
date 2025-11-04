/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : ''

// Allow overrides via env when needed; otherwise auto-detect on GitHub Actions
const resolvedBasePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : isGitHubActions && repoName
    ? `/${repoName}`
    : ''

const resolvedAssetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX
  ? process.env.NEXT_PUBLIC_ASSET_PREFIX
  : isGitHubActions && repoName
    ? `/${repoName}/`
    : ''

const nextConfig = {
  // Export a static site for GitHub Pages
  output: 'export',
  // Helpful for GitHub Pages directory-style hosting
  trailingSlash: true,
  // Ensure next/image works in static export
  images: { unoptimized: true },
  // Only set when non-empty to avoid affecting local dev
  basePath: resolvedBasePath || undefined,
  assetPrefix: resolvedAssetPrefix || undefined,
}

module.exports = nextConfig



