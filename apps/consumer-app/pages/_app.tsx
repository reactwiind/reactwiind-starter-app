import 'reactwiind/dist/index.css';
import '../styles/globals.css';
import { ThemeProvider } from "reactwiind";

//@ts-ignore
function MyApp({ Component, pageProps }: any) {
  return   <ThemeProvider value={{}}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
