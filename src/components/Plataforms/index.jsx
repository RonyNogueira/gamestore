import React, {useState} from "react";
import {Box, Tabs, Tab, Grid } from "@mui/material";



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
              <Box sx={{ p: 3 }}>
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
        <Grid>
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                <Tab label="Pc" {...a11yProps(0)} />
                <Tab label="Xbox" {...a11yProps(1)} />
                <Tab label="PlayStation" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>

            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>

            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>

            </Box>
        </Grid>
      );
    }


export default Plataforms