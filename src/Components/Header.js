import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from "@material-ui/core";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { padding } from "@mui/system";
import { blueGrey } from "@material-ui/core/colors";

const useStyles= makeStyles({   //css
    root: {
        backgroundColor:'Primary'
        // transform:'translateƵ(0)',
        
    },

    searchInput: {
     opacity:'0.6',
     padding:' 10px 8px',
     '&: hover':{
        backgroundColor:blueGrey
     },
     '& .MuiSvgIcon-root':{
        marginRight: '8px'
     }

    }
})

export default function Header() {

    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item >
                        <InputBase placeholder="Search... "
                        startAdornment={<SearchIcon />}
                        className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item sm > </Grid>
                    <Grid item>
                        <IconButton>
                              <SaveIcon/> 
                              
                        </IconButton>

                        <IconButton>
                            
                              <ShareOutlinedIcon/>
                            
                        </IconButton>

                        <IconButton>
                            
                              <SettingsOutlinedIcon/>
                           
                        </IconButton>
                   

                    </Grid>
                    </Grid>

            </Toolbar>

        </AppBar>
    )
}