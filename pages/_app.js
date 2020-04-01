import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ReactQueryDevtools } from 'react-query-devtools';

// Attach Chakra's theme's and Reset styles for every page
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ReactQueryDevtools />
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
};