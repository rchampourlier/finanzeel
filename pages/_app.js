import "../styles/globals.css";
import initAuth from "../init-auth"; // the module you created above

initAuth();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
