  import fondo from "../images/background4.jpg";
import { makeStyles, Paper, TextField, Typography,Button } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_wismFVDjva1IRpolOG0vR"); 
//init("user_n6Q444YHoIOxGmIHzYTiz"); {/*clave de david*/}

const Contact= ({title, dark, id}) => {
    const classes = useStyles();  
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm("service_m1hmb4j","template_kw3x0f5", e.target, "user_n6Q444YHoIOxGmIHzYTiz")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }
      
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
           <div className={classes.sectioncontent} id={id}
           class="bg_image"
           style={{
             backgroundImage: 'url('+fondo+')',
             backgroundSize: "cover",
             height: "100vh",
             color: "#f5f5f5"
           }}
           >
                <Typography variant="h2" className={classes.title}>{title}</Typography>
                
                <Paper className={classes.root}> 
                  <div className={classes.titleandchoices}>
                    <Typography variant="h5">CONTACTAME</Typography>
                  <form className={classes.form} onSubmit={sendEmail} noValidate autoComplete="off">
                    <TextField 
                    name="user_name"
                    className={classes.margin}
                    id="filled-basic"
                    label="Nombre"
                    required                  
                    type="text"
                    variant="outlined"/>
                    <br/>
                    <TextField 
                    name="email"
                    className={classes.margin}
                    id="filled-basic"
                    variant="outlined"
                    label="Email"
                    required
                    type="email" 
                    />
                    <br/>
                    <TextField 
                    className={classes.margin}
                    label="Escribeme un mensaje"
                    name="message"
                    id="filled-basic"
                    variant="outlined"
                    multiline
                    rows={4}
                    />
                    <br/>
                    <Button variant="conteined" type="submit" value="Send">
                    Enviar
                    </Button>
                  </form>
                  </div>
                </Paper>
            </div>
            </div>
    );
}

const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
    },
    sectiondark:{
      color: "#fff",
    },
    
  title:{
    maxWidth:"80vw",
          margin: "0 auto",
  },
    root:{
      marginTop: theme.spacing(5),
      marginLeft: 'auto',
      marginRight: 'auto',
      display:'flex',
      maxWidth:"70vh",
      fontSize:"1.9rem",
      "& button":{
        backgroundColor: "#404040",
        color: "black",
        fontSize: "1.3rem", 
      },
      "& button:hover":{
        backgroundColor: teal[700],        
        color:"#fff",
      },
    },
    sectioncontent:{
      margin: "0 auto",
    },
    titleandchoices:{
      marginLeft:theme.spacing(4),
      "& h5":{
        marginTop: theme.spacing(5),
      }
    },
    form:{
      padding: theme.spacing(4),
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    margin:{
      borderColor: 'primary',
      fontSize: "3rem"
    },
    
  }))

export default Contact