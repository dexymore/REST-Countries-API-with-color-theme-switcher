import React from "react";
import Lottie from "lottie-react";
import singleAnimation from "./lotties/singlePlayer.json";
import twoAnimation from "./lotties/twoPlayer.json";
import { Link } from "react-router-dom";

function FlagGame() {
  return (
    <div className="flagGameChooseParent">
      <Link className="singlePlayer" to="singlePLayer">
        <div className="singlePlayerText">
          <h1>Single Player</h1>
        </div>
        <Lottie
          animationData={singleAnimation}
          style={{ width: "600px", height: "600px" }}
          loop={true}
          autoPlay={true}
        />
      </Link>

      <Link className="twoPlayer" to="">
        <div className="twoPlayerText">
          <h1>Two Players</h1>
        </div>
        <Lottie
          animationData={twoAnimation}
          style={{ width: "600px", height: "600px" }}
          loop={true}
          autoPlay={true}
        />
      </Link>
    </div>
  );
}

export default FlagGame;
