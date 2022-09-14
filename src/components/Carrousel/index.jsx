import React from "react";
import Slider from "react-slick";
import './style.scss'
import { Box, Grid, Typography } from "@mui/material";

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            className: "center",
            infinite: true,
            dots: false,
            
          }
        }
    ]
  }

  const loop = [0,1,2,3,4]

const Carrousel = ()=>{
    return(
      <>
        <Grid container padding={3} paddingBottom={0}>
          <Typography variant="h3">
              RECENTLY REVIEWED
          </Typography>
          </Grid>
          <Box className="carrousel">
              <Slider {...settings}>
                {
                  loop.map(()=>(
                    <Box className="carrousel__content">

                      <Box className="carrousel__content__rating">
                        90
                      </Box>

                      <Box className="carrousel__content__card">
                        <Box className="carrousel__content__card__bg">
                          <Box className="carrousel__content__card__text">
                            <Typography variant="h2">God of War</Typography>
                            <Typography variant="span">Após a morte da segunda esposa de Kratos e mãe de Atreus, eles viajam para cumprir sua promessa de espalhar suas cinzas no pico mais alto dos nove reinos. 
                              Kratos mantém seu passado conturbado em segredo de Atreus, que não tem consciência de sua natureza divina.</Typography>
                          </Box>
                       
                        </Box>
               
                      </Box>
                  </Box>
                  ))
                }
      
              </Slider>
        </Box>
        </>
    )
}

export default Carrousel