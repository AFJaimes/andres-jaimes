import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

function App() {
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
    typography: {
      fontFamily: ["Fira Code", "monospace"].join(","),
    },
  });
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Grid container>
          <Grid item xs={12} sm={7} md={9}>
            <About />
          </Grid>
          <Grid item xs={12} sm={5} md={3}>
            <Skills />
          </Grid>
        </Grid>
        education experience cetrificates
      </div>
    </ThemeProvider>
  );
}

export default App;
