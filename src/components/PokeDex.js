import React from 'react';
import Search from "./Search";
function PokeDex() {
    return (
    <div>
        <form onSubmit={Search}>
            <label for="pokemon">Search for a Pokemon!</label>
            <br />
            <input type="text" id="pokemon" name="pokemon" onSubmit={Search}/>
            <input type="button" value="Search" onClick={Search} /> 
        </form>
        <p id="errortext"></p>
        <div id="pokeinfo"></div>
    </div>
    )
}
export default PokeDex;