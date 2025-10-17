import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kleedo - AI Recepční',
    short_name: 'Kleedo',
    description: 'AI recepční, která vždy zvedne telefon a nikdy nemá špatnou náladu.',
    start_url: '/',
    display: 'standalone',
    background_color: '#131313',
    theme_color: '#D1EE9E',
    icons: [
      {
        src: '/images/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
