import { Card, CardContent, CardMedia, makeStyles, Typography,Button } from '@material-ui/core';
import user_dave from "../images/user.jpg";
import fondo from "../images/background.jpg";
import pdf from "../docs/Alejandro_David_Esquivel_Bautista_CV.pdf";
import TypeWriterEffect from "react-typewriter-effect"
import PropTypes from 'prop-types';

function MyButton(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

MyButton.propTypes = {
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

const About = ({title, dark, id}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}
        class="bg_image"
        style={{
          backgroundImage: 'url('+fondo+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
          >
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                  <CardMedia image={user_dave} className={classes.media} title="picture"/>
                  <CardContent className={classes.cardcontend}>
                  <TypeWriterEffect 
                  text="Que tal, mi nombre es Alejandro Esquivel"
                  textStyle={{fontSize:"1.9rem", fontWeight:"600px", color:"#fff"}}
                  startDelay={100}
                  cursorColor="black"
                  typeSpeed={100} />
                  <TypeWriterEffect 
                  text="Y soy Analista de sistemas"
                  textStyle={{fontSize:"1.6rem",  color:"#202020",fontWeight:"500px"}}
                  startDelay={2000}
                  cursorColor="black"
                  typeSpeed={100}/>
                  <Typography variant="h5">
                    <br/>
                  Me considero una persona cordial, intenso e impaciente. Queriendo lograr que las cosas se empiecen, que sigan adelante y se obtengan los resultados tan rápido como sea posible, también ando en la búsqueda de nuevas formas para cambiar o en su defecto, mejorar los sistemas y resultados actuales.
                  Me agradan los retos por lo cual siempre estoy en constante aprendizaje, también me considero una persona competitiva y ambiciosa, con grandes deseos de aprender algo nuevo día con día.
                  </Typography>
                  <Typography color="textSecondary" >
                    Descarga mi CV<br/><br/>
                    <Button variant="contained" className={classes.botonpdf}>
                      <a href={pdf}download>
                      Download CV
                      </a><br/>
                    </Button>
                  </Typography>                                    
                  </CardContent>
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
      background: 'linear-gradient(162deg, rgba(0,0,0,1) 0%, rgba(97,9,121,1) 32%, rgba(2,39,83,1) 100%)',
        color: "#fff",
      },
    sectioncontent:{
        maxWidth:"80vw",
        margin: "0 auto",
    },
    card:{
      background:'rgba(249,249,249, .3)',
      position:"relative",
      height:"0 auto",
      display:"flex",
      marginTop: theme.spacing(2),
    },
    media:{
      width:"300px",
      height:"auto",
      objectfit:"cover",
      borderRadius:"5px",
      margin: theme.spacing(3)
    },
    cardcontend:{
      textAlign: "justify",
      position:"relative",
      maxWidth:"600px",
      [theme.breakpoints.down("sm")]:{
        "& h5":{
          marginTop:theme.spacing(2),
          display:"none",
        },
      },
    },
    botonpdf:{
      background: (props) =>
      props.color === 'red'   
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    alignContent:"center",
    marginLeft:100,
      [theme.breakpoints.down("sm")]:{
        bottom:10,
        right:"5rem",
      },
      backgroundColor:"#404040",
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
          color:"#fff",
        }
    },
  }))
  
export default About