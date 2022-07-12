import Head from "next/head";
import Header from "components/Header/Header";
import Skills from "components/Skills";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Experience from "components/Experience";
import About from "components/About/About";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#dcdcaa",
      },
      secondary: {
        main: "#4fc1f1",
        light: "#4ec9b0",
      },
    },
  });
  console.log(theme);
  return (
    <>
      <Head>Andres Felipe Jaimes Sanchez homepage</Head>
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <Divider />
          <Grid container>
            <Grid item xs={12} sm={7} md={9}>
              <About />
              <Divider />
              <Experience />
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Skills />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
}
