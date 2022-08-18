import { createMuiTheme, CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';

import { ReactDOMfrom } from 'react-dom';

import './App.css';
import Header from '../Components/Header';
// import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
// import ToysIcon from '@mui/icons-material/Toys';
// import PaperHeader from '../Components/PaperHeader';
import { createTheme } from '@material-ui/core/styles'
 import  Employees  from "../Pages/Employees/Employees";

const theme= createTheme({
  palette:{
    primary:{
      main:"#333996",
      light:'#3c44b126',
    },
    
    background:{
      default:"#f4f5fd"
    },
  },
  overrides:{
  MuiAppBar:{
root:{
  transform:'translateƵ(0)'
}
  }
}
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '2px',
    width: '100%',

  }
})

function App() {
  const classes = useStyles()

  return (

    <>

      {/* <SideMenu /> */}

      <div className={classes.appMain}>
        <Header/>
         <Employees/>
      </div>
      <CssBaseline/>

    </>

  );

}



export default App;