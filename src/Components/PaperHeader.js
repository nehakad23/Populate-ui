import { ClassNames } from "@emotion/react";
// import { Card, Paper , } from "@material-ui/core";
import { Card, color, makeStyles, Paper , Typography } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React from "react";

const useStyles= makeStyles(theme =>({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader: {
        padding: theme.spacing(0),
        display:'flex',
        marginBottom: theme.spacing(0)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(1),
         paddingLeft:theme.spacing(4),
        color:'#3c44b1',
        
    },
    pageTitle:{
        paddingLeft: theme.spacing(4),
        '& .MuiTypography=subtitle2':{
            opacity:'0.6',
        }
    }
}))
export default function PaperHeader(props) {
    const classes= useStyles();
    const {title, subtitle, icon}=props;
    return(
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
             {/* </div> */}
             <div className={classes.pageTitle}>
                <Typography
                variant="h6"
                component="div">
                    {title}
                </Typography>
                <Typography
                variant="subtitle2"
                component="div">
                    {subtitle}
                </Typography>

             </div>
             </div>

            </Paper>

    )
}


