import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from "react-router-dom"
import Pages from './pages';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import { Grid } from '@mui/material';
import  {useState} from 'react'


function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <BrowserRouter>
  
          <Grid container sx={12} md={12}>
          
              <Grid md={1} item sx={{ display: { sm: 'block', xs: 'block' } }}>
                <SideMenu toggle={toggle}/>
              </Grid>

              <Grid item xs={12} md={11}>
                <Header setToggle={setToggle} toggle={toggle}/>
                <Pages/>
              </Grid>
              
          </Grid>

      
     
    </BrowserRouter>
  );
}

export default App;
