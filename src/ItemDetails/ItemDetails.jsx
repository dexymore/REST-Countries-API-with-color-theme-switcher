import React from 'react'
import { useParams } from 'react-router-dom'
import { CountryDetail } from '../FetchData';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate}  from 'react-router-dom';
import { useContext } from 'react'
import { Themecontext } from '../context/context'
function ItemDetails() {
let {Theme}=useContext(Themecontext)



  let params=useParams();
const [countyDetails, setcountyDetails] = useState({})
const history =useNavigate()

useEffect(() => {
CountryDetail(setcountyDetails,params.name)
Theme=="light"?  document.body.style.setProperty('background-color', 'white',"important"):document.body.style.setProperty('background-color', '#202C37 ',"important")
Theme=="light"?  document.body.style.setProperty('color', 'black',"important"):document.body.style.setProperty('color', 'white ',"important")

}, [params, Theme]);







if(countyDetails.img)
{
return     <>

<div className='container  '>
<button type="button" className=" mt-5 mb-5 btn btn-secondary btn-md" onClick={()=> history(-1)}><i class="fa-solid fa-left-long"></i> back</button>
</div>
<div className='container details'>
<div className='row'>
<div className=' col-md-6'>
<img src={countyDetails.img}></img>

</div>

<div className=' col-md-5 '> 
<h4 className='fw-bold'>{countyDetails.name}</h4>
<div className='row'>
<ul className='col-md-5 list-group list-unstyled'>
   <li className='m-2'><span className='h6 fw-bold'>native name: </span>{countyDetails.native}</li>
     <li  className='m-2'><span className='h6 fw-bold'>population: </span>{countyDetails.population}</li>
      <li  className='m-2'><span className='h6 fw-bold'>region: </span>{countyDetails.region}</li>
        <li  className='m-2'><span className='h6 fw-bold'>subregion: </span>{countyDetails.subregion}</li>
        <li  className='m-2'><span className='h6 fw-bold'>capital: </span>{countyDetails.capital}</li>
    
</ul>
<ul className=' col-md-5 list-group list-unstyled'>
<li  className='m-2'><span className='h6 fw-bold'>top level domain: </span>{countyDetails.tld}</li>
<li  className='m-2'><span className='h6 fw-bold'>time zone: </span>{countyDetails.timzone}</li>

<li className='m-2'><span className='h6 fw-bold'>UN member: </span>{countyDetails.un==true?"member":"not a member"}</li>
</ul>
<div className='container'>
    <span className='h6 fw-bold'>borders : 
{countyDetails.borders?countyDetails.borders.map((item,index)=><Link type="button" className=" m-2 btn btn-secondary btn-sm"  to={`/country/${item}`}>{item}</Link>):""}
</span>
</div>
</div>
</div>
</div>
</div>

</>

}
else 
return<div className='container loadtop d-flex align-items-center justify-content-center'>
    <i className='fas load   m-5 col-md-1  fa-cog fa-spin fa-3x'></i>
</div>

}

export default ItemDetails
