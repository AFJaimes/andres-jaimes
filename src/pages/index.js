import Head from "next/head";
import Header from "components/Header/Header";
import Skills from "components/Skills/Skills";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import About from "components/About/About";
import Experience from "components/Experience/Experience";
import Projects from "components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Head>Andres Felipe Jaimes Sanchez homepage</Head>
      <div>
        <Header />
        <Divider />
        <Grid container>
          <Grid item sm={12} md={9}>
            <About />
            <Divider />
            <Experience />
          </Grid>
          <Grid item sm={12} md={3}>
            <Skills />
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Projects />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
