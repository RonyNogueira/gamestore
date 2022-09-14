import { Button, Grid,Box, Typography } from "@mui/material";
import React from "react";
import "./style.scss"

const Banner = ()=>{
    return(
        <>
            <Box>
                <Grid container>
                        <Grid className="banner">
                            <Typography variant="h1">
                                Title
                            </Typography>
                            <Button>Confira</Button>
                        </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Banner 