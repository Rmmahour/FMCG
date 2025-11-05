/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/fmcg-track-trace',
  assetPrefix: '/fmcg-track-trace/',
  experimental: { typedRoutes: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['blob.v0.app', 'blobs.vusercontent.net', 'campaign.basiq360.com', 'localhost:3000'],
    unoptimized: true,
  }
}

export default nextConfig
