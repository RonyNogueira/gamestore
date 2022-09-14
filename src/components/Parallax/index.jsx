import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CustomBtn } from "../index"
import "./style.scss"


const Parallax = ()=>{
    return(
        <>
            <Box paddingTop={4} paddingBottom={4}>
                <Grid container className="parallax" direction="column">
                    <Grid item>
                        <Typography variant="h1">
                            Be the gamer
                        </Typography>
                    </Grid>

                    <Grid item>
                     <CustomBtn text={"Random"}/>
                    </Grid>
             
                </Grid>
            </Box>
        </>
    )
}

export default Parallax