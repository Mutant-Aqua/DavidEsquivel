import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography,Button } from '@material-ui/core';
import user_dave from "../images/user.jpg";
import pdf from "../docs/Alejandro_David_Esquivel_Bautista_CV.pdf";
import TypeWriterEffect from "react-typewriter-effect"

const About = ({title, dark, id}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                  <CardMedia image={user_dave} className={classes.media} title="picture"/>
                  <CardContent className={classes.cardcontend}>
                  <TypeWriterEffect 
                  text="Que tal, mi nombre es Alejandro Esquivel"
                  textStyle={{fontSize:"2rem", fontWeight:"700px", color:"#9E003A"}}
                  startDelay={100}
                  cursorColor="black"
                  typeSpeed={100} />
                  <TypeWriterEffect 
                  text="Y soy Analista de sistemas"
                  textStyle={{fontSize:"1.2rem", fontWeight:"500px"}}
                  startDelay={2000}
                  cursorColor="black"
                  typeSpeed={100}/>
                  <Typography variant="h6" color="textSecondary">
                    <br/>
                  Me considero una persona una persona cordial, intenso e impaciente. Queriendo lograr que las cosas se empiecen, que sigan adelante y se obtengan los resultados tan rápido como sea posible, también ando en la búsqueda de nuevas formas para cambiar o en su defecto, mejorar los sistemas y resultados actuales.
                  Me agradan los retos por lo cual siempre estoy en constante aprendizaje, también me considero una persona competitiva y ambiciosa, con grandes deseos de aprender algo nuevo día con día.
                  </Typography>
                  <Typography variant="h7" color="textSecondary">
                    Descarga mi CV
                  </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" className={classes.botonpdf}>
                      <a href={pdf}download>
                      Download CV
                      </a>
                    </Button>
                  </CardActions>
                </Card>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      maxHeight: "0 auto",
    },
    sectiondark:{
        background: "#202020",
        color: "#fff",
      },
    sectioncontent:{
        maxWidth:"80vw",
        margin: "0 auto",
    },
    card:{
      position:"relative",
      height:"0 auto",
      display:"flex",
      marginTop: theme.spacing(6),
    },
    media:{
      width:"250px",
      height:"auto",
      objectfit:"cover",
      borderRadius:"5px",
      margin: theme.spacing(3)
    },
    cardcontend:{
      textAlign: "justify",
      position:"relative",
      maxWidth:"500px",
      [theme.breakpoints.down("sm")]:{
        "& h6":{
          marginTop:theme.spacing(2),
          display:"none",
        },
      },
    },
    botonpdf:{
      position: "absolute",
      bottom:"1rem",
      right:"2rem",
      [theme.breakpoints.down("sm")]:{
        bottom:10,
        right:"5rem",
      },
      backgroundColor:"#404040",
      padding: theme.spacing(2),
      " &:hover":{
        backgroundColor:"#606060"
      }
        ,
        "& a":{
          color:"#fff",
          textDecoration:"none",
          fontWeight:600,
        },
        "& a:hover":{
          color:"#9E003A",
        }
    },
  }))
  
export default About