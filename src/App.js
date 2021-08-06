import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
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
  );
}

export default App;
