import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import "./style.scss"
import vava from "../../assets/img/vava.png"

const Details = ()=>{
    return(
        <>
           
                <Box container className="details">
                    <Grid container className="details__bg"/>
                     
                    <Grid container>

                            <Grid item md={4}>
                                    <Box className="details__game_img">
                                        <img src={vava} alt="" />
                                    </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Typography variant="h1"> Valorant</Typography>
                                <Typography variant="h2">29 de  julho de 2022</Typography>
                                <Typography variant="h3">Riot games</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    98
                                </Box>
                            </Grid>
                    </Grid>

                    <Grid container className="details__content">
                        <Grid item md={4} className="details__content__details">
                            <ul>
                                <li>
                                    <Typography variant="h5" component={"p"}>
                                        Genre: <a href="#">Adventure</a>
                                    </Typography>

                                </li>
                                <li>
                                    <Typography variant="h5" component={"p"}>
                                        Plataform: <a href="#">PC</a>
                                    </Typography>
                                </li>
                            </ul>
                            <Typography variant="h5" component={"p"}>
                            A vast world awaits in Xenoblade Chronicles 3, the 
                            next game in the acclaimed RPG series from developer Monolithsoft. 
                            Players will step into the roles of protagonists Noah and Mio amid turmoil between the hostile nations of Keves and Agnus. Six characters hailing from those nations will take part in a grand tale with “life” as its central theme. Explore a new world that will connect the futures of both Xenoblade Chronicles and Xenoblade Chronicles 2.
                            </Typography>
                        </Grid>
                    </Grid>
                
                </Box>
          
        </>
    )
}

export default Details