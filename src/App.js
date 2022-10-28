import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from "react-router-dom"
import Pages from './pages';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import { Grid } from '@mui/material';
import { store } from './store'
import { Provider} from 'react-redux'


function App() {

  
  return (
    <Provider store={store}>
        <BrowserRouter>
      
              <Grid container sx={12} md={12}>
              
                  <Grid md={1} item sx={{ display: { sm: 'block', xs: 'block' } }}>
                    <SideMenu />
                  </Grid>

                  <Grid item xs={12} md={11}>
                    <Header  />
                    <Pages/>
                  </Grid>
                  
              </Grid>

          
        
        </BrowserRouter>
    </Provider>
  );
}

export default App;
