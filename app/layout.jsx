import React from "react";

import dynamic from 'next/dynamic';

import ThemeRegistry from "@theme/ThemeRegistry";
import { Box } from "@mui/material";

import "./globals.css"
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

import { getSortedPostsData } from '@lib/posts'


/**
 *
 *
 * @export
 * @param {*} { params }
 * @return {*} 
 */
export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL('https://marea-creativa.vercel.app/'),
    alternates: {
      canonical: '/',
    },
    generator: 'Marea Creativa',
    applicationName: 'MC',
    referrer: 'origin-when-cross-origin',
    keywords: ['Gremio', 'PWA', 'Marea', 'Creativa', 'Sufokia', 'Guias', 'Eventos', 'Wakfu', 'MMORPG', 'Táctico', 'Turnos', 'Ogrest'],
    title: { default: 'Marea Creativa', template: '%s | Marea Creativa' },
    description: 'Página oficial del gremio Marea Creativa en el servidor Ogrest INT.',
    authors: [{ name: 'Cardo Pixel', url: 'https://github.com/CardoPixel' }],
    creator: 'Cardo Pixel',
    publisher: 'Vercel',
    /* themeColor: '#e133e3', */
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      images: '/og-image.png',
    },
  }
}

const DynamicPageLoadChecker = dynamic(() => import('@utils/PageLoadChecker'), {
  ssr: false,
});


/**
 *
 *
 * @export
 * @param {*} { children }
 * @return {*} 
 */
export default function RootLayout({ children }) {
  const allPostsData = getSortedPostsData()
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: "mui" }}>
        <body>
          <DynamicPageLoadChecker />
          <NavBar posts={allPostsData} />
          <Box className="container" sx={{ px: 2, mx: 0, width: "100%", maxWidth: "none", height: "100%", maxHeight: "81.5vh", overflowY: "scroll", backgroundColor: "background.paper" }}>
            {(children)}
          </Box>
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave wave2"></div>
          </div>
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
