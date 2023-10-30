import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { chooseCountry, handleCountruesToChooseFrom } from "./logic";

import { DataContext } from "../context/DataContext";

function SinglePlayer() {
  const { data, loading, error } = useContext(DataContext);
    let buttons = document.querySelectorAll(".countryButton");
  const [candidateCountry, setCandidateCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [countriesToChooseFrom, setCountriesToChooseFrom] = useState([]);
  function reloadcandidatecountry (){
    const randomCandidateCountry = chooseCountry(data);

    setCandidateCountry(randomCandidateCountry);
    document.getElementById("next").style.visibility = "hidden";

    buttons.forEach((button) => {
      button.classList.remove("correct");
      button.classList.remove("incorrect");
      button.disabled = false;
    });
  }

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

  console.log(candidateCountry);

  return (
    <div className="flagGame">
<div className="score">
<h3>Score: {score}</h3>

</div>


      {candidateCountry && (
        <div className="candidateCountry">
        <img src={candidateCountry.flags.png} alt="flag" />
        </div>

      )}
      <div className="countryButtons">
        {countriesToChooseFrom.map((country) => (
          <button 
          className="countryButton"
            onClick={(e) => {
              if (country === candidateCountry) {
                setScore(score + 1);
                console.log(score);
                document.getElementById("next").style.visibility = "visible";  
                // e.target.classList.remove("incorrect");
                e.target.classList.add("correct");
                buttons.forEach((button) => {
                 
                  button.disabled = true;
                });
            

              }
              else {
              document.getElementById("next").style.visibility = "visible";
              e.target.classList.add("incorrect");
              buttons.forEach((button) => {

                if (button.innerHTML === candidateCountry.name.common) {
                  button.classList.add("correct");
        
                return
              
                }
                button.disabled = true;


              });
              }
            }}
          >
            {country.name.common}
          </button>
        ))}
         <button onClick={reloadcandidatecountry}   id="next">Next</button>
      </div>

     
    </div>
  );
}

export default SinglePlayer;
