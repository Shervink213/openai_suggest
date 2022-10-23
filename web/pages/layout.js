import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
