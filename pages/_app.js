import { ThemeProvider, CSSReset } from '@chakra-ui/core';

// Attach Chakra's theme's and Reset styles for every page
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
};