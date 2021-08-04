import { AppBar, makeStyles, Toolbar,List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import logo from "../images/Logo.png"
import {Link, animateScroll as scroll } from "react-scroll"
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import ExtensionSharpIcon from '@material-ui/icons/ExtensionSharp'
import WorkSharpIcon from '@material-ui/icons/WorkSharp'
import ContactMailSharpIcon from '@material-ui/icons/ContactMailSharp'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import AssignmentIndSharpIcon from '@material-ui/icons/AssignmentIndSharp';
import {useState} from "react"

const Navbar = () => {
const classes = useStyles();
const [open, setOpen] = useState(false)
const links =[
    {
        id: "about",
        text: "Sobre mi",
        icon: <PermIdentitySharpIcon fontSize="large" className={classes.luz}/>
    },
    {
        id: "skills",
        text: "Habilidades",
        icon: <ExtensionSharpIcon fontSize="large" className={classes.light}/>
    },
    {
        id: "work",
        text: "Mis Trabajos",
        icon: <WorkSharpIcon fontSize="large" className={classes.color}/>
    },
    {
        id: "mydata",
        text: "Interes",
        icon: <AssignmentIndSharpIcon fontSize="large" className={classes.tono}/>
    },
    {
        id: "contact",
        text: "Contacto",
        icon: <ContactMailSharpIcon fontSize="large" className={classes.other}/>
    },
]

    const scrollToTop=()=>{
        scroll.scrollToTop()
    }

    return(
    <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img 
                onClick={scrollToTop}
                src={logo} className={classes.logo} alt="Logo"/>
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index) => (
                            <Link key={index} 
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-160} >
                            {text}</Link>

                        ))
                    }
                </List>
                <IconButton edge="end" 
                    className={classes.menubutton}
                    onClick={()=>setOpen(!open)}
                >
                <MenuSharpIcon fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
            anchor="right"
            open={open}
            onClose={()=>setOpen(false)}>
                <IconButton onClick={()=>setOpen(false)} className={classes.cancelicon}>
                    <CancelSharpIcon fontSize="large"/>
                </IconButton>
            <Divider/>
                    {
                        links.map(({id, text,icon}, index) => (
                            <Link className={classes.sidebar} key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-160} >
                                    <ListItem component="h5">
                                        <spam>
                                            <ListItemIcon>
                                                {icon}
                                            </ListItemIcon>
                                        </spam>{text}
                                    </ListItem>
                            </Link>
                            ))
                    }
        </Drawer>
    </>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        background: "#F5F5EF",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar:{
        display: "flex",
        justifyContent: "flex-start",
        alingItems: "center",
    },
    logo:{
      height: "10rem",
      objectFit: "contain",
      "&:hover":{
          cursor: "pointer"
      }
    },
    luz:{
        color: "#672146"
    },
    light:{
        color: "#672146"
    },
    color:{
        color: "#672146"
    },
    tono:{
        color: "#672146"
    },
    other:{
        color: "#672146"
    },
    menu: {
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
        "& a": {
            color: "#303030",            
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3),
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#9E003A",
            borderBottom: "3px solid #9E003A",
        },
    },
    menubutton:{
        display: "none",
        [theme.breakpoints.down("sm")]:{
        display: "block",
        color: "#404040",
        position: "absolute",
        top: 25,
        right: 40,
        }
    },
    cancelicon:{
        color: "RED",
        position: "absolute",
        marginTop:theme.spacing(2),
        top: 0,
        right:10,
    },
    sidebar:{
        marginTop: theme.spacing(5),
        width:"20vw",
        [theme.breakpoints.down("sm")]:{
            width:"65vw",
        },
        "& h5": {
            margin: theme.spacing(3,0,0,3),
            fontSize:"1rem",
            color:"#606060",
            fontWeight:"bold",        
        },
        "& h5:hover": {
            cursor:"pointer",
            borderBottom: "5px solid #606060"
        }
    },
  }))

export default Navbar