import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import Interes from "./Interes"
import React from 'react';

const MyData = ({title, dark, id}) => {
const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
            <Typography variant="h3">{title}</Typography>
            <Grid container className={classes.grid}>
                  {
                    Interes.map(({title,image,link},index)=>(
                      <Grid Item key={index} xs={12} sm={6}>
                        <Card className={classes.card}>
                        <CardMedia className={classes.caratula} image={image} titulo="caratula"/>
                          <CardContent>
                            {title}
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  }
                </Grid>
            </div>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
    },
    sectiondark:{
        background: "#333",
        color: "#fff",
      },
      sectioncontent:{
        maxWidth:"80vw",
        margin: "0 auto",
    },
    grid:{
      marginTop: theme.spacing(3),
    },
    card:{
      maxWidth:"90%",
      minHeight:"35px",
      margin: theme.spacing(3),

    },
    caratula:{
      height: 0,
      paddingTop: '56.25%',
      padding: theme.spacing(5),
    },
  }))
export default MyData