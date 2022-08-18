import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function useForm(initialFValues, validateOnChange=false, validate) {
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange)
        validate({[name]: value})
    }

    

    const resetForm =()=>{
        setValues(initialFValues);
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
         resetForm,

    }
}

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        width: '100%',
        margin: theme.spacing(2),
        paddingLeft: theme.spacing(0),
        left:'0px',
        display:'inline-block',
        flexDirection:'row',
       
      },

  
  
  
    }
  }))




export function Form(props) {

    const classes = useStyles();
    const {children, ...other}=props;
   return (
        <form className={classes.root} {...other}>
           {props.children}
       </form>
   )
}



