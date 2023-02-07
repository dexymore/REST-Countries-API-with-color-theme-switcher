import React from 'react'
import classes from "./countrycard.module.css"

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { Themecontext } from '../context/context'
function CountryCard({item}) {
  let {Theme}= useContext(Themecontext)
 
  useEffect(() => {
   

     Theme=="light"?  document.body.style.setProperty('background-color', 'white',"important"):document.body.style.setProperty('background-color', '#202C37 ',"important")

    
  }, [Theme]);


    let card="card  ";
let listgroup="list-group-item"
    let darktheme="darktheme"
    let lighttheme="lighttheme"

    return <>
    <div className='col-md-4  mt-5 ' style={{ width: '20rem' }}>
<Link to={`/country/${item.name.official}`} style={{ textDecoration: 'none' }}>
<div className={`${classes.cardheight} ${card} ${Theme=="light"?lighttheme:darktheme} `}  >

  <img src={item.flags.png} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{item.name.official}</h5>
  
  </div>
 <div className='d-flex flex-row'>
  <ul className="list-group list-group-flush">
    <li className={`${listgroup}  ${Theme==="light"?lighttheme:darktheme}` }><span className='h6'>population: </span>{item.population}</li>
    <li className={`${listgroup}  ${Theme==="light"?lighttheme:darktheme}` }><span className='h6'>region: </span> {item.region} </li>
    <li className={`${listgroup}  ${Theme==="light"?lighttheme:darktheme}` }> <span className='h6'>capital: </span>{item.capital}</li>
  </ul>
  
 </div>
</div>
</Link></div>

    </>
}

export default CountryCard