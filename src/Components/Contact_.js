import { makeStyles, Paper, Radio, TextField, Typography,Button } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import {useState} from "react"
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_wismFVDjva1IRpolOG0vR"); 
//init("user_n6Q444YHoIOxGmIHzYTiz"); {/*clave de david*/}

const Contact= ({title, dark, id}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Say Hi");
    const handleChange = (e) => {
      setValue(e.target.value);
    }
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm("service_45ngyjl","template_a71pxps", e.target, "user_wismFVDjva1IRpolOG0vR")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
           <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Paper className={classes.root}> 
                  <div className={classes.titleandchoices}>
                    <Typography variant="h5">CONTACTAME</Typography>
                    <div className={classes.choices}>
                      <span>Contactame</span>
                      <Radio
                        value = "Say Hello"
                        checked={value === "Say Hello"}
                        color="primary"
                        onChange={handleChange}
                      />
                      <span>Consigue una cotizacion</span>
                      <Radio
                        value = "Get a Quote"
                        checked={value === "Get a Quote"}
                        color="primary"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <form className={classes.form} onSubmit={sendEmail} noValidate autoComplete="off">
                    <TextField name="user_name" id="filled-basic" label="Nombre" variant="outlined"/><br/>
                    <TextField name="email" id="filled-basic" variant="outlined" label="Email" /><br/>
                    {
                      value === "Get a Quote" ? (
                        <>
                        <TextField label="Servicio requerido" name="service" id="filled-basic" variant="outlined"/><br/>
                        <TextField label="Presupuesto estimado" name="cost" id="filled-basic" variant="outlined"/><br/>
                        </>
                      ) : null
                    }
                    <TextField label="Escribeme un mensaje" name="message" id="filled-basic" variant="outlined"/>
                  </form>
                  <Button variant="conteined" type="submit" value="Send">
                    Enviar
                  </Button>
                </Paper>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vw",
      
    },
    sectiondark:{
      background: "#333",
      color: "#fff",
    },  
    root:{
      marginTop: theme.spacing(2),
      background: "#404040",
      color:"#fff",
      fontSize:"1.5rem",
      fontWeigth: 100,
      maxWidth:"500px",
      display:"flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: theme.spacing(4),
      "& button":{
        backgroundColor: "#fff",
        color: "tomato",
        fontSize: "1.2rem",
        marginTop: theme.spacing(4),
      },
      "& button:hover":{
        backgroundColor: teal[700],        
        color:"#fff",
      },
    },
    sectioncontent:{
      maxWidth:"80vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alingItems: "center",
      margin: "0 auto",
    },
    titleandchoices:{
      "& h5":{
        marginTop: theme.spacing(3),
      }
    },
    
  }))

export default Contact