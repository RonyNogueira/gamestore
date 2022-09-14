import { Box, Grid } from "@mui/material";
import React from "react";
import "./style.scss"


const Footer = ()=>{
    return(
        <>
            <Box>

                <Grid container className="footer">
                    <Grid item md={4}>
                        item
                    </Grid>
                    <Grid item md={8}>
                        item
                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

export default Footer