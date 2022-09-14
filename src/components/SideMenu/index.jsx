import { Box } from "@mui/material";
import React from "react";
import './style.scss'
import avatar from "../../assets/img/profile.jpg"
import home from "../../assets/img/home.png"
import games from "../../assets/img/games.png"
import graph from "../../assets/img/grafico.png"
import { Link } from "react-router-dom";


const SideMenu = ({toggle})=>{
    return(
        <Box  className={`side__menu  ${toggle && 'toggle'}`}>

            <Box className="side__menu__avatar">
                <img src={avatar} alt="" />
            </Box>

            <Box className="side__menu__links">
                <ul>
                    <li>
                        <Link className="side__menu__links__link" to={'/'}>
                            <img src={home} alt="" />
                        </Link>
                    </li>
                    <li>
                    <Link className="side__menu__links__link" to={'/'}>
                            <img src={games} alt="" />
                        </Link>
                    </li>
                    <li>
                    <Link className="side__menu__links__link" to={'/'}>
                            <img src={graph} alt="" />
                        </Link>
                    </li>
                </ul>
            </Box>
      
        </Box>

    )
}

export default SideMenu