import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  // useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>HVDelights</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme, colors: {
          truePink: ["#eba4a4", "#eba4a4", "#eba4a4", "#eba4a4","#eba4a4", "#eba4a4", "#eba4a4", "#eba4a4", "#eba4a4", "#eba4a4"]
        } }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <ShoppingCartProvider>
              <div className={colorScheme === 'dark' ? 'dark' : ''}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </div>
            </ShoppingCartProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
