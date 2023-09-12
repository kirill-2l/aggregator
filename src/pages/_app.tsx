import { Header } from "@/components/header";
import { Providers } from "@/providers";
import { Layout } from "@/components/Layout";
import "@/styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
