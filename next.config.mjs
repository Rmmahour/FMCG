/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/fmcg-track-trace',
  typedRoutes: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'blob.v0.app' },
      { protocol: 'https', hostname: 'blobs.vusercontent.net' },
      { protocol: 'https', hostname: 'campaign.basiq360.com' },
      { protocol: 'http', hostname: 'localhost' },
    ],
    unoptimized: true,
  }
}

export default nextConfig