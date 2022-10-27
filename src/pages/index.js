import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./Home";
import Details from "./Details";


const Pages = ()=>{
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Routes>
               <Route path='/details' element={<Details/>}/>
           </Routes>
        </>
    )
}

export default Pages 
