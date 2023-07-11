import React from 'react';
import '@/styles/globals.css';
import { useEffect } from 'react';
import "tw-elements/dist/css/tw-elements.min.css";

const MainSite = ({ Component, pageProps }) => {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return <Component {...pageProps} />;
}

export default MainSite;