import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { CustomBtn } from "../index"


import vava from "../../assets/img/vava.png"
import fort from "../../assets/img/fort.jpg"
import "./style.scss"

const loop = [0,1,2,3,4]


const MostViewed = ()=>{
    return(
        <>
            <Box>
                <Grid padding={3}>
                   <Typography variant="h4">
                        TOP GAMES ON TWITCH
                    </Typography>
                </Grid>
                <Grid container className="most__viewed">
                 
                    <Grid item md={5}>
                        <ul className="most__viewed__list">
                            {
                                loop.map(()=>(
                                
                                <li>
                                    <Box>
                                        <img src={fort} alt="" />
                                    </Box>

                                    <Box className="most__viewed__list__title">
                                        <Typography variant="h4">
                                        Fortnite
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Viewers: 53,250 
                                        </Typography>
                                    </Box>

                                    <Grid container justify="flex-end">
                                        <CustomBtn text={"Ver mais "}/>
                                    </Grid>
                                </li>
                                ))
                            }
               
                           
                        </ul>
                    </Grid>
                    <Grid item md={7}>
                        <img src={vava} className="img-fluid" alt="" />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MostViewed