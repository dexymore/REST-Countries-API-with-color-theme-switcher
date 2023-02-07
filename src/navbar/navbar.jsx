import React from 'react'
import clasess from '../navbar/navbar.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Themecontext } from '../context/context'
import { Link } from 'react-router-dom';
function Navbar() {
let {Theme, changeTheme}= useContext(Themecontext)




useEffect(() => {
 
}, [Theme])
let moon="moon"

let nav="pt-2 pb-3 "
let icon="fa-regular fa-moon mt-4 fa-xl"
let navdark="navdark"
let navlight="navlight"
return (
    <div className={`${nav} ${Theme==="light"?navlight:navdark}`}>
    <div className='d-flex flex-row container justify-content-between'>
    <div className=' mt-2' ><Link to={"/"}  style={{ textDecoration: 'none' }}><h4 className={Theme==="light"?" text-dark":"text-light"}> where in the world?</h4></Link></div>
 <div >
 <i className={`${icon} ${Theme==="light"?"":moon}`} onClick={changeTheme}></i>
 </div>
 </div>
  </div>
  )
}

export default Navbar