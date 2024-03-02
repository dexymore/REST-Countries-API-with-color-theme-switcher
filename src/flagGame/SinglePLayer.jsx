import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CountryButton from "./CountryButton";
import Gameover from "./Gameover";
import { Themecontext } from "../context/context.js";



import { chooseCountry, handleCountruesToChooseFrom } from "./logic";

import { DataContext } from "../context/DataContext";

function SinglePlayer() {
  let {Theme}= useContext(Themecontext)
  const { data, loading, error } = useContext(DataContext);
  
  
  const [disabledButtons, setDisabledButtons] = useState(false);
 const buttons = document.querySelectorAll(".countryButton");
  const [candidateCountry, setCandidateCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [countriesToChooseFrom, setCountriesToChooseFrom] = useState([]);
  function reloadcandidatecountry() {
    const randomCandidateCountry = chooseCountry(data);
    setDisabledButtons(false); 
    setCandidateCountry(randomCandidateCountry);
    document.getElementById("next").style.visibility = "hidden";

    buttons.forEach((button) => {
      button.classList.remove("correct");
      button.classList.remove("incorrect");
      button.disabled = false;
    });
  }

  const [gameOver, setGameOver] = useState(false);
  const [trails, setTrails] = useState(3);

  let darktheme="darktheme"
  let lighttheme="lighttheme"

  useEffect(() => {
    reloadcandidatecountry();
  }, [data]);

  useEffect(() => {
    // Check if candidateCountry is available before generating options
    if (candidateCountry) {
      const countries = handleCountruesToChooseFrom(data, candidateCountry);
      setCountriesToChooseFrom(countries);
      console.log(countries, "countries");
    }
  }, [data, candidateCountry]);

  useEffect(() => {
   

    Theme=="light"?  document.body.style.setProperty('background-color', 'white',"important"):document.body.style.setProperty('background-color', '#202C37 ',"important")

   
 }, [Theme]);


  return (<>
{(score === 2||trails===0) && <Gameover score={score} trails={trails} />}
      <div className={`flagGame ${Theme=="light"?lighttheme:darktheme}`}>
    <div className="d-flex flex-row justify-content-evenly w-100 mt-0">
    <div className="score">
        <h3>Score: {score}</h3>
      </div>
      <div className="trails ">
        <h3 >Trails: {trails}</h3>
      </div>
    </div>

      {candidateCountry && (
        <div className="candidateCountry">
          <img src={candidateCountry.flags.png} alt="flag" />
        </div>
      )}
      <div className="countryButtons">
          {countriesToChooseFrom.map((country) => (
            <CountryButton
              key={country.name.common}
              country={country}
              candidateCountry={candidateCountry}
              disabled={disabledButtons}
              onButtonClick={(clickedCountry, setButtonState) => {
                setDisabledButtons(true); // Disable all buttons
                if (clickedCountry === candidateCountry) {
                  setScore(score + 1);
                  setButtonState('correct');
              
                  document.getElementById("next").style.visibility = "visible";
                } else {
                  setButtonState('incorrect');
                  setTrails(trails - 1);
                  document.getElementById("next").style.visibility = "visible";
                }
              }}
            />
          ))}
          <button onClick={reloadcandidatecountry} id="next">
            Next
          </button>
        </div>
    </div>

 </> );
}

export default SinglePlayer;
