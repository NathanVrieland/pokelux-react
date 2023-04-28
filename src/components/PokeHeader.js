import Logo from "../Poke Pics/Pokeball.png";
import {Link} from 'react-router-dom';
import React from 'react';
import Donate from "./Donate";

function PokeHeader() {
    return (
        <header> 
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
        <nav>
             <button href="pokedex.html"
                  onclick="document.querySelector('.row').scrollIntoView({behavior: 'smooth'})">Collections</button>
             <button href="#"
                  onclick="document.querySelector('.Pokelux-Heading').scrollIntoView({behavior: 'smooth'})">About
                  Us</button>
             <button href="#"
                  onClick={Donate}>Support</button>
        </nav>
        </header>
    )
}
export default PokeHeader;