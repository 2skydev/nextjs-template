import { useMemo } from 'react';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { InitGlobalStyled } from '~/styles/init';
import { colors, sizes } from '~/styles/themes';

/* *
 * styled-components theme typescript support
 */
type Colors = typeof colors;
type Sizes = typeof sizes;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    sizes: Sizes;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const theme = useMemo(
    () => ({
      sizes: sizes,
      colors: colors,
    }),
    [],
  );

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <InitGlobalStyled />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
