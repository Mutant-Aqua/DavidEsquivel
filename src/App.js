import { createMuiTheme, makeStyles, MuiThemeProvider, } from "@material-ui/core";
import Navbar from "./Components/Navbar.js";
import About  from "./Components/About.js";
import Contact from "./Components/Contact.js";
import MyWork from "./Components/MyWork.js";
import Skills from "./Components/Skills.js";
import Mydata from "./Components/MyData.js";
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palete:{
    primary:{main: teal[700]},
    secondary:{main: "#00695f"},
  },
  typography: {
    fontDisplay: 'swap',
  },
})

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <Navbar/>
      <About title="Sobre mi" id="about" dark={true}/>
      <Skills title="Manejo de Software"id="skills" dark={false}/>
      <MyWork title="My Work"id="work" dark={true}/>
      <Mydata title="Datos de interes" id="mydata" dark={false}/>
      <Contact title="Get in touch" id="contact" dark={true}/>
    </div>
    </MuiThemeProvider>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}))

export default App;