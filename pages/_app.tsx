import { Layout } from '@/components/Layout/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
