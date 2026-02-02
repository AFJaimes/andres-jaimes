import Head from "next/head";
import { useLanguage } from "contexts/LanguageContext";
import Header from "components/Header/Header";
import Skills from "components/Skills/Skills";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import About from "components/About/About";
import Experience from "components/Experience/Experience";
import Projects from "components/Projects/Projects";

const siteUrl = "https://www.afjaimes.com";
const siteName = "Andrés Felipe Jaimes Sánchez";

export default function Home() {
  const { t, language } = useLanguage();
  const description = t("meta.description");
  const keywords = t("meta.keywords");
  const title = t("meta.title");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={siteName} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={language === "es" ? "es_ES" : "en_US"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#1e1e1e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <a href="#main-content" className="skip-link">{t("common.skipToContent")}</a>
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
