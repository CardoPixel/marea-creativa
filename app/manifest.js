/**
 *
 *
 * @export
 * @return {*}
 */
export default function manifest() {
  return {
    name: 'Marea Creativa',
    short_name: 'MC',
    description:
      'Página oficial del gremio Marea Creativa en el servidor Ogrest INT.',
    start_url: '/',
    display: 'standalone',
    background_color: '#171717',
    theme_color: '#e133e3',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/ico',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
