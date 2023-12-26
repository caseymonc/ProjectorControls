import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import queryClient from 'src/lib/queryClient';

import 'src/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
