import "../../src/styles/global.scss";
import { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </AuthProvider>
  );
}
