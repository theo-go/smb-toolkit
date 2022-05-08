
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    
    <PlasmicRootProvider>
            <Head>
        <title>The SMB Toolkit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
  