import React from "react";
import { Button, Box } from "@mui/material";
import "./style.scss"

const CustomBtn = ({text, click, style})=>{
    return(
        <Box>
            <Button className={` btn__Custom ${style}`} onClick={click}>{text}</Button>
        </Box>
    )
}

export default CustomBtn