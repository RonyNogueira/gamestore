import React from "react";
import {AppBar, 
        Box, 
        Toolbar, 
        Typography, 
        Button, 
        IconButton,
        InputBase,  
       } from "@mui/material"
import "./style.scss"

const Header = ({setToggle, toggle})=>{
    

    return(
    <Box sx={{ flexGrow: 1 }}>
        <AppBar className="header" position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
               
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Discover 
            </Typography>

            <Box>
                <Box>
                
                </Box>
                <InputBase
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Box>

            <Button color="inherit">Login</Button>
            <Button style={{ textAlign: 'right'}} onClick={()=>setToggle(!toggle)} color="inherit">MENU</Button>
            </Toolbar>
        </AppBar>
        
    </Box>

    )
}

export default Header