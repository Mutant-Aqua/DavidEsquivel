import { makeStyles, Paper, Radio, TextField, Typography,Button } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import {useState} from "react"
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_n6Q444YHoIOxGmIHzYTiz");

const Contact= ({title, dark, id}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Say Hi");
    const handleChange = (e) => {
      setValue(e.target.value);
    }
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm("service_m1hmb4j",'template_kw3x0f5', e.target, "user_n6Q444YHoIOxGmIHzYTiz")
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
                      <span>Say Hello</span>
                      <Radio
                        value = "Contactame"
                        checked={value === "Contactame"}
                        color="primary"
                        onChange={handleChange}
                      />
                      <span>Get a Quote</span>
                      <Radio
                        value = "Consigue una cotizacion"
                        checked={value === "Consigue una cotizacion"}
                        color="primary"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <form className={classes.root} onSubmit={sendEmail} noValidate autoComplete="off"></form>
                  <form className={classes.form} noValidate autoComplete="off">
                    <TextField label="Nombre" variant="outlined"/><br/>
                    <TextField label="Email" variant="outlined"/><br/>
                    {
                      value === "Get a Quote" ? (
                        <>
                        <TextField label="Servicio requerido" variant="outlined"/><br/>
                        <TextField label="Presupuesto estimado" variant="outlined"/><br/>
                        </>
                      ) : null
                    }
                    <TextField label="Escribeme un mensaje" variant="outlined"/>
                  </form>
                  <Button variant="conteined">
                    Submit
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