import Head from "next/head";
import Header from "components/Header/Header";
import Skills from "components/Skills/Skills";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import About from "components/About/About";
import Experience from "components/Experience/Experience";
import Projects from "components/Projects/Projects";

const siteUrl = "https://www.afjaimes.com";
const siteName = "Andrés Felipe Jaimes Sánchez";
const description = "Senior Frontend Developer & UI/UX Specialist. Computer Systems Engineer specializing in React, TypeScript, Next.js, and creating exceptional digital experiences.";
const keywords = "frontend developer, react developer, typescript, next.js, UI/UX designer, web developer, software engineer, frontend engineer, react.js, javascript developer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteName} | Senior Frontend Developer & UI/UX Specialist</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={siteName} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={`${siteName} | Senior Frontend Developer`} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={`${siteName} | Senior Frontend Developer`} />
        <meta name="twitter:description" content={description} />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#1e1e1e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div>
        <Header />
        <Divider />
        <main id="main-content">
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
        </main>
      </div>
    </>
  );
}
