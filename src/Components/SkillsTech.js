import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Paper from '@material-ui/core/Paper';
import htmlSkill from "../images/icons/html.png";
import cssSkill from "../images/icons/css.png"
import jsSkill from "../images/icons/js.png"
import sqlSkill from "../images/icons/sql.png"
import javaSkill from "../images/icons/java.png"
import csharpSkill from "../images/icons/csharp.png"
import RatingStar from "./RatingStar";


const SkillsTech = () => {
    const classes = useStyles();
    const skills = [
        {
            year: "2020",
            src:htmlSkill,
            title: "HTML",
            stars: 4,
        },
        {
            year: "2020",
            src:cssSkill,
            title: "CSS",
            stars: 4,
        },
        {
            year: "2020",
            src:jsSkill,
            title: "JavaScript",
            stars: 3,
        },
        {
            year: "2020",
            src:sqlSkill,
            title: "SQL",
            stars: 4,
        },
        {
            year: "2020",
            src:csharpSkill,
            title: "C SHARP",
            stars: 3,
        },
        {
            year: "2020",
            src:javaSkill,
            title: "JAVA",
            stars: 2,
        },

    ];
return (
    <Timeline aling="left">
        {
            skills.map(({year,src,title,stars},index)=>(
                <TimelineItem key={index}>
                <TimelineSeparator>
                    <img src={src} alt={title} className={classes.customlogo} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={5} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      {title}
                    </Typography>
                   <RatingStar stars={stars} />
                  </Paper>
                </TimelineContent>
              </TimelineItem> 
            ))
        }
    </Timeline>
)
}

const useStyles = makeStyles((theme) => ({
    customlogo:{
      width:"35px",
    },
    paper: {
      padding: '6px 15px',
      maxWidth:"190px",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }))

export default SkillsTech