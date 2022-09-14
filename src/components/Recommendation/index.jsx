import { Grid, Typography } from "@mui/material";
import React from "react";

import dmc from "../../assets/img/devil.png"
import god from "../../assets/img/god.jpg"
import "./style.scss"

const Recomendation = ()=>{
    return(
        <>
        <Grid container padding={3}>
            <Typography variant="h4">
            POPULAR GAMES RIGHT NOW
            </Typography>
        </Grid>
        <Grid container spacing={2} className="recomendation">

            <Grid item md={6} >
                    <img src={dmc} className="recomendation__big" alt="" />
            </Grid>

            <Grid container item md={6}>
                    <Grid container className="recomendation__box" md={6}>
                        <img src={god}  className="recomendation__small" alt="" />
                    </Grid>

                   <Grid container className="recomendation__box" md={6}>
                        <img src={god} className="recomendation__small" alt="" />
                    </Grid>

                    <Grid container className="recomendation__box" md={6}>
                        <img src={god}  className="recomendation__small" alt="" />
                    </Grid>
                   <Grid container className="recomendation__box" md={6}>
                        <img src={god} className="recomendation__small" alt="" />
                    </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Recomendation 