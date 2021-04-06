import { AppProps } from "next/app";
import "../node_modules/destyle.css/destyle.css"
import "../styles/pages/common.scss"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
