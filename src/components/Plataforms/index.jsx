import React, {useState} from "react";
import {Box, Tabs, Tab, Grid, Typography } from "@mui/material";
import cyber from "../../assets/img/cyber.jpg"
import vava from "../../assets/img/vava.png"
import fort from "../../assets/img/fort.jpg"
import "./style.scss"




const Plataforms = ()=>{
    const [value, setValue] = useState(0);

    function TabPanel({children, value, index}) {
        
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
          >
            {value === index && (
              <Box>
               {children}
              </Box>
            )}
          </div>
        );
      }

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

      
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
        <Grid width={"100%"}>
          <Grid container padding={3}>
                <Typography variant="h4" >
                  Top games by platform
                </Typography>
            </Grid>
            <Box className="tabs">
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} >
                <Tab label="Pc" {...a11yProps(0)} />
                <Tab label="Xbox" {...a11yProps(1)} />
                <Tab label="PlayStation" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <Box className="category --pc">
                    <Grid container >
                        <Grid  className="category__tier">
                          <Box className="category__tier__game">

                            <img src={cyber} alt="" />
                            <Box>
                                <Typography variant="h5" component={"h2"}>
                                  Cyberpunk 2077
                                </Typography>
                  
                            </Box>

                          </Box>
                          <Box className="category__tier__game">
                            
                              <img src={vava} alt="" />
                              <Box>

                                <Typography variant="h5" component={"h2"}>
                                  Valorant
                                </Typography>
                    
                              </Box>
                          </Box>

                          <Box className="category__tier__game">
                            <img src={fort} alt="" />
                            <Box>
                                <Typography variant="h5" component={"h2"}>
                                  Fortnite
                                </Typography>
                  
                            </Box>
                          </Box>
                        </Grid>
                    </Grid>
                </Box>
            </TabPanel>

            <TabPanel value={value} index={1}>
            <Box className="category --xbox">
                    <Grid container >
                        <Grid  className="category__tier">
                          <Box className="category__tier__game">

                            <img src={cyber} alt="" />

                            <Box>
                                <Typography variant="h5">
                                  Cyberpunk 2077
                                </Typography>
                  
                                <Typography variant="h5">
                                  Rating: 30/100
                                </Typography>
                            </Box>
                    

                          </Box>
                          <Box className="category__tier__game">
                            
                              <img src={fort} alt="" />
                              <Typography variant="h5">
                                Cyberpunk 2077
                              </Typography>
              
                              <Typography variant="h5">
                                Rating: 30/100
                              </Typography>
                          </Box>

                          <Box className="category__tier__game">
                            <img src={vava} alt="" />
                              <Typography variant="h5">
                                Cyberpunk 2077
                              </Typography>
                
                              <Typography variant="h5">
                                Rating: 30/100
                              </Typography>
                          </Box>
                        </Grid>
                    </Grid>
                </Box>
            </TabPanel>

            <TabPanel value={value} index={2}>
            <Box className="category --ps">
                    <Grid container >
                        <Grid  className="category__tier">
                          <Box className="category__tier__game">

                            <img src={vava} alt="" />
                            <Typography variant="h5">
                              Cyberpunk 2077
                            </Typography>
              
                            <Typography variant="h5">
                              Rating: 30/100
                            </Typography>

                          </Box>
                          <Box className="category__tier__game">
                            
                              <img src={fort} alt="" />
                              <Typography variant="h5">
                                Cyberpunk 2077
                              </Typography>
              
                              <Typography variant="h5">
                                Rating: 30/100
                              </Typography>
                          </Box>

                          <Box className="category__tier__game">
                            <img src={cyber} alt="" />
                              <Typography variant="h5">
                                Cyberpunk 2077
                              </Typography>
                
                              <Typography variant="h5">
                                Rating: 30/100
                              </Typography>
                          </Box>
                        </Grid>
                    </Grid>
                </Box>
            </TabPanel>

            </Box>
        </Grid>
      );
    }


export default Plataforms