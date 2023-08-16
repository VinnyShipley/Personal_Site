import React from 'react';
import '@/styles/globals.css';
import 'tw-elements/dist/css/tw-elements.min.css';
import { Cabin } from '@next/font/google'

const cabin = Cabin({
	subsets: ['latin'],
	weight: '400',
  variable: '--font-cabin'
});

const MainSite = ({ Component, pageProps }) => {
	return (
		<main className={cabin.className}>
			<Component {...pageProps} />
		</main>
	);
};

export default MainSite;
