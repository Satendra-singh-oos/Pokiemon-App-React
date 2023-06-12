import React, { useCallback, useState } from "react";
import { pokimonContext, useGlobalContext } from "../../ContextApi/context";
import Error from "../../Utils/Error";
import "./HomePage.css"

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { fetchPokiemonData, pokiemon, foundPokie } = useGlobalContext();

  const fetchPokiemonHandler = useCallback(() => {
    fetchPokiemonData(searchQuery);
  }, [searchQuery, fetchPokiemonData]);

  console.log(searchQuery);
  return (
    <div>
      {/* Navbar */}
      <div className="Navbar">
        <span>Pokiemon  Wiki </span>

        <input
          type="text"
          placeholder="Search Your Pokemon"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button onClick={fetchPokiemonHandler}> Search Pokie</button>
      </div>

      {/* PokiemonCard */}

      <div className="displayCard">
        {!foundPokie ? (
          <Error />
        ) : (
          <>
            <div class="slide-container">
              <div class="wrapper">
                <div class="clash-card barbarian">
                  <div class="clash-card__image clash-card__image--barbarian">
                    <img src={pokiemon.img} alt="barbarian" />
                  </div>
                  <div class="clash-card__level clash-card__level--barbarian">
                    Level {pokiemon.experience}
                  </div>
                  <div>{pokiemon.name}</div>
                  <div class="clash-card__unit-description">
                    The {pokiemon.species}  is a  warrior with an angry,
                    battle-ready expression, hungry for destruction. He has
                    the power of {pokiemon.type} .
                    
                  </div>

                  <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                    <div class="one-third">
                      <div class="stat">
                        {pokiemon.attack}<sup>S</sup>
                      </div>
                      <div class="stat-value">Attack</div>
                    </div>

                    <div class="one-third">
                      <div class="stat">{pokiemon.defense}</div>
                      <div class="stat-value">Defense</div>
                    </div>

                    <div class="one-third no-border">
                      <div class="stat">{pokiemon.hp}</div>
                      <div class="stat-value">Hp</div>
                    </div>

                    
                  </div>
                </div>
                {/* <!-- end clash-card barbarian--> */}
              </div>
              {/* <!-- end wrapper --> */}
            </div>
            {/* <!-- end container --> */}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
