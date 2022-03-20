import '../styles/global.css'
import {useEffect} from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => console.log(`App component rendering ${pageProps}`));
    return <Component {...pageProps} />
  }