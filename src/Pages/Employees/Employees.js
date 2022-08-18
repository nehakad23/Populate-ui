import React, { useState } from "react";
import  EmployeeForm from "./EmployeeForm";
import PaperHeader from "../../Components/PaperHeader";
import ToysIcon from '@mui/icons-material/Toys';
import { makeStyles, Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import useTable from "../../Components/useTable";
import * as EmployeeService from "../../services/employeeService"


const useStyles = makeStyles(theme =>({
    pageContent:{
        margin: theme.spacing(2),
        padding: theme.spacing(-5),
    }
}))

const headCells =[
    {id:'projectName', label:'Project Name'},
    {id:'plantName', label:'Plant Name'},
    {id:'shopName', label:'Shop Name'},
    {id:'stationName', label:'Station Name'},

]

export default function Employees() {
    const classes=useStyles();
    const [records, setRecords]=useState(EmployeeService.getAllEmployees())

const {
    TblContainer,
}= useTable(records, headCells);


    return(
        <>
        <PaperHeader
        title="Rockwell Automation"
        subtitle="JBM Project"
        icon={<ToysIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
        <EmployeeForm/>
       <TblContainer>
        <TableBody>
            {
                records.map(item =>
                    (<TableRow key={item.id}>
                        <TableCell>{item.projectName}</TableCell>
                        <TableCell>{item.plantName}</TableCell>
                        <TableCell>{item.shopName}</TableCell>
                        <TableCell>{item.stationName}</TableCell>
                        
                        </TableRow>))
            }

        </TableBody>
       </TblContainer>
        </Paper>
        </>

    )
}
