import React from 'react'
import YouWin from "./lotties/YouWin.json";
import Lottie from "lottie-react";
import cup from "./lotties/cup.json";
import sorry from "./lotties/sorry.json";
function Gameover({ score, trails}) {
  return (
    <div className='gameover d-flex flex-column justify-content-center text-text-md-center'>
    
       {score===25 &&<div className="gameoverLottie">
        <Lottie
            animationData={cup}
            style={{ width: "200px", height: "200px" }}
            loop={true}
            autoPlay={true}
        />
        <div className='youWin'>
            <Lottie
            animationData={YouWin}
            style={{ width: "200px", height: "50px" }}
            loop={true}
            autoPlay={true}
            /></div>
        </div>}
        {(score!==25 || trails===0)&& 
        <div>
        <Lottie
            animationData={sorry}
            style={{ width: "200px", height: "200px" }}
            loop={true}
            autoPlay={true}></Lottie>
            <h1 className='youlost'>you lost</h1>
        </div>
        }
        <button onClick={()=>window.location.reload()} className='btn btn-primary btn-rounded '><h4>Play Again</h4></button>
    </div>
  )
}

export default Gameover