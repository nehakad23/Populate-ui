import { Button as MuiButton, makeStyles} from "@material-ui/core";
import { color } from "@mui/system";
import React from "react";

const useStlyes= makeStyles(theme =>({
    root:{
        margin:theme.spacing(0.5)
    },
    label:{
        textTransform:'none'
    }
}));
 
export default function Button(props) {
    const {text, size, color, variant, onClick,startIcon, ...other}= props
    // const classes=useStlyes();
    return(
        <MuiButton
        variant={variant || "contained"}
        size={size || "medium"}
        color={color || "primary"}
        onClick={onClick}
        startIcon={startIcon}
        align
        {...other}
        classes
        >
            {text}
        </MuiButton>
    )
}
