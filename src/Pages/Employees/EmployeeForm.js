import { Box, FormControl, Grid, InputLabel, makeStyles, MenuItem, NativeSelect, Select, TextField } from "@material-ui/core";
import { margin } from "@mui/system";
import React, { useState, useEffect } from "react";
import Controls from "../../Components/controls/Controls";
import Input from "../../Components/controls/Input";
import { useForm, Form, Combobox } from "../../Components/useForm";
import * as  employeeService from "../../services/employeeService";
// import UseForm from "../../Components/UseForm";
// import TextField from '@mui/material/TextField';
// import { Form } from "../../Components/useForm";
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useRef } from "react";


// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiFormControl-root': {
//       width: '80%',
//       margin: theme.spacing(2),
//       paddingLeft: theme.spacing(0),
//       left:'0px'
//     }




//   }
// }))
const initialFValues = {
  id: 0,

  projectName: '',
  plantName: '',
  shopName: '',
  stationName: '',
}
export default function EmployeeForm() {
  //   const [values,setValues] = useState(initialFValues);
  // const classes = useStyles();

  const  validate=(fieldValues = values) => {
     let temp = {...errors}
     if ('projectName' in fieldValues)
     temp.projectName = fieldValues.projectName ? "" : "This field is required."
     if ('plantName' in fieldValues)
     temp.plantName = fieldValues.plantName.length !== 0 ? "":"This field is required."
     if ('shopName' in fieldValues)
     temp.shopName = fieldValues.shopName.length !== 0 ? "":"This field is required."
     if ('stationName' in fieldValues)
     temp.stationName = fieldValues.stationName.length !== 0 ? "":"This field is required."
     setErrors({
      ...temp
     })
  if (fieldValues == values)
  return Object.values(temp).every(x => x === "")
}


  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);


  //  const handleInputChange = e =>{
  //     const{name, value}= e.target
  // setValues({
  //     ...values,
  //     [name]:value
  // }) }
  const handleSubmit = e => {

     e.preventDefault()
     console.log(e)
    if (validate())
    // window.alert('testing...')
     employeeService.insertEmployee(values)
  }

  
  

  return (
    <Form onSubmit={handleSubmit}>
      {/* <form className={classes.root}> */}
      {/* <Form> */}
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }} >
        <Grid item >
          <Controls.Input
            name="projectName"
            label="Project Name"
            value={values.projectName}
            onChange={handleInputChange}
            error={errors.projectName}      //resuable component input.js
          />&nbsp;&nbsp;
         

        </Grid>

        {/* <Controls.Select
          name="plantName"
          label="Plant Name"
          value={values.plantName}
          onChange={handleInputChange}
          options={employeeService.getPlantCollection()} /> */}


        <Box sx={{ minWidth: 200 }}>
          <FormControl  >

            <InputLabel  htmlFor="uncontrolled-native">
              Plant Name
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              error={errors.plantName}
              inputProps={{
                name: 'plantName',
                id: 'uncontrolled-native',
                
                

              }}
            >
              <option value={10}>--Select--</option>
              <option value={10}>Plant 1</option>
              <option value={20}>Plant 2</option>
              <option value={30}>Plant 3</option>

            </NativeSelect>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth  >

            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Shop Name
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              error={errors.shopName}
              inputProps={{
                name: 'shopName',
                id: 'uncontrolled-native',
                label: 'Shop Name',

              }}
            >
              <option value={10}>Quality</option>
              <option value={20}>Paint</option>
              <option value={30}>BIW</option>
            </NativeSelect>
          </FormControl>
        </Box>




        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Station Name
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              error={errors.stationName}
              inputProps={{
                name: 'stationName',
                id: 'uncontrolled-native',
                
               

              }}
            >
              <option value={10}>TR 01</option>
              <option value={20}>TR 02</option>
              <option value={30}>TR 03</option>
            </NativeSelect>
          </FormControl>
        </Box>






        <div>
          <Controls.Button
            type="Submit"
            text="Submit"
            color="default"
            startIcon={<AddIcon />} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


          <Controls.Button
            text="Reset"
             color="default"
            startIcon={<RestartAltIcon />}
            onClick={resetForm}
          />

        </div>
        


      </Grid>
      {/* </form> */}
    </Form>

  )

}