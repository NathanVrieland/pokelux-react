import React from 'react';
import Ash from '../Poke Pics/Ash.png';
import Pikachu from '../Poke Pics/Pikachu.png';
import Ivysaur from '../Poke Pics/Ivysaur.png';
import Charizard from '../Poke Pics/Charizard.png';
import {Link} from 'react-router-dom';

function PokeHome() {
     return (
     <main class="main"> {/*Adjusts the Main Site Body*/}
               <section class="Pokelux-Heading">
                    <h1>Welcome to <span>Pokélux.</span>
                    </h1>
                    <p>Explore the captivating world of Pokémon through our refined digital compendium. Discover the unique
                         characteristics, evolutions, strengths, and weaknesses of each creature in a sophisticated and
                         elegant setting. Unravel the mysteries of the Pokémon universe with ease and elegance.</p>
               </section>

               <div class="row"> {/* Adjusts Each Row of Info */}
                    <div class="col">
                         <img src={Ash} alt="Stage 1" />
                    </div>
                    <div class="col">
                         <h2 class="row-title">Pokedex</h2>
                         <p class="row-desc">Search through our pokedex and look at more specific stats on every pokemon!</p>
                         <Link to="/pokedex" class="btn">Learn More</Link>
                    </div>
                    
               </div>

               <div class="row"> {/*Adjusts Each Row of Info */}
                    <div class="col">
                         <h2 class="row-title">Stage 1 Evolution</h2>
                         <p class="row-desc">Discover the initial evolutions of your favorite Pokémon and immerse yourself in
                              their unique characteristics, strengths, and weaknesses. Our refined digital compendium offers
                              an elegant and comprehensive guide to these budding companions, watching as they grow into
                              powerful allies with ease and grace.</p>
                    </div>
                    <div class="col">
                         <img src={Pikachu} alt="Stage 1" />
                    </div>
               </div>

               <div class="row">
                    <div class="col">
                         <img src={Ivysaur} alt="Stage 2"  />
                    </div>
                    <div class="col">
                         <h2 class="row-title">Stage 2 Evolution</h2>
                         <p class="row-desc">
                              Journey deeper into the captivating world of Pokémon and discover the second stage of evolution
                              for your favorite creatures. You can indulge in the unique
                              characteristics, strengths, and weaknesses of these formidable companions. Explore the
                              intricacies of their evolution paths and witness their transformation into powerful allies with
                              sophistication and elegance.</p>
                    </div>
               </div>

               <div class="row">
                    <div class="col">
                         <h2 class="row-title">Stage 3 Evolution</h2>
                         <p class="row-desc">Experience the pinnacle of Pokémon evolution through our elegant and
                              comprehensive guide. This offers an immersive look into the final stage
                              of evolution for your favorite creatures. Discover the unique characteristics, strengths, and
                              weaknesses of these extraordinary companions, witnessing their remarkable transformation into
                              awe-inspiring allies.</p>
                    </div>
                    <div class="col">
                         <img src={Charizard} alt="Stage 3" />
                    </div>
               </div>
          </main>
     )
}

export default PokeHome;