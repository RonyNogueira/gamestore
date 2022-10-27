import { Box, Grid } from "@mui/material";
import React from "react";
import { MostViewed, Carrousel, Footer, Parallax, Plataforms } from "../../components";

const Home = ()=>{
    return(
        <>
             <Box>
                <Grid sx={12} md={12}>
                    <Carrousel/>
                </Grid>
             </Box>
             <Box>
                <Parallax/>
             </Box>
            <Box>
               <MostViewed/>
            </Box>
            <Box>
                <Plataforms/>
            </Box>
            <Box>
                <Footer/>
            </Box>
         
        </>
    )
}

export default Home