/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
    sw: '/sw.js'
})

const nextConfig = withPWA({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                pathname: '/img/**'
            }
        ]
    }
})

module.exports = nextConfig
