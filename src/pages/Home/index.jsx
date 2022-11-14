import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { MostViewed, Carrousel, Footer, Parallax, Plataforms } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../../redux/actions/menu/menuActions";

const Home = ()=>{
    const {counter} = useSelector((state)=> state.addCountReducer) 
    const dispatch = useDispatch()

    return(
        <>
             <Box>
                <Grid sx={12} md={12}>
                    <Carrousel/>
                </Grid>
             </Box>
             <Box>
                <h1>{counter}</h1>
                <Button onClick={()=>{dispatch(counterAction())}}>adicionar</Button>

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