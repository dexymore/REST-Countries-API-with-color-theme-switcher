import React from 'react'
import { useEffect } from 'react'
import CountryCard from '../countryCard/countryCard'
import { useState } from 'react'
import { useContext } from 'react'
import { Themecontext } from '../context/context'

import axios from "axios";

function AllCountries() {
  let {Theme}=useContext(Themecontext);
const [allCountries, setallCountries] = useState([])
const [filtername, setfiltername] = useState("filter")
const [filter, setfilter] = useState("all")

   const [count, setcount] = useState(20)





 async function CountriesData(){
  if(filter=="all"||filter==""){
  const countries= await axios.get("https://restcountries.com/v3.1/all");
  setallCountries(countries.data);
  
  }
  else if(filter=="africa"||filter=="europe"||filter=="americas"||filter=="asia"||filter=="oceania")
  {
      const filterdcount= await axios.get(`https://restcountries.com/v3.1/region/${filter} `)
      setallCountries(filterdcount.data);
  
  }
  else{
  const filterdcountry= await axios.get(`https://restcountries.com/v3.1/name/${filter} `)
  console.log(filterdcountry.data)   
  setallCountries(filterdcountry.data)}
   }
  



   function tewenty()
{
  setcount(count+20)

}

  
   useEffect(() => {
    CountriesData()
    
   



     
 }, [filter])
 



 function change(event){
    setfilter(event.target.innerText);
  setcount(20)
setfiltername(event.target.innerText)
}
  
  
function changesearch(event){
    setfilter(event.target.value)


}
  
function less(){
  if(count!=20)
  {
    setcount(count-20)
  }
  else
  return
}

    return (<>



<div className='container mt-2 filters'>

<div class="input-group mt-4 wid ">
  <input type="text" className={Theme=="dark"?"darktheme form-control":"lighttheme form-control"} placeholder="search by name" aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyUp={changesearch}></input>
  <span className={Theme=="dark"? "darktheme input-group-text": "lighttheme input-group-text"} id="basic-addon2"><i class="fas fa-search"></i></span>
</div>
        <div className="dropdown mt-4 ">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
 aria-haspopup="true" aria-expanded="false">
      {filtername}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" onClick={change}>all</a>
          <a class="dropdown-item"  onClick={change}>africa</a>
          <a class="dropdown-item"  onClick={change} >europe</a>
          <a class="dropdown-item"  onClick={change}>americas</a>
          <a class="dropdown-item"  onClick={change}>asia</a>
          <a class="dropdown-item "  onClick={change}>oceania</a>
        </div>
      </div>
      
   
      </div>
   <div className='container mt-1'>

   <div className='mt-1 row  justify-content-center align-items-center'>

   {allCountries.length>=0?allCountries.slice(0,count).map((item,index)=><CountryCard key={index}  item={item}/>):<i className='fas load m-5 col-md-1 fa-cog fa-spin fa-3x'></i>}
 
   {allCountries.length>1 ? <button className="m-3 btn w-25 btn-primary" onClick={tewenty}>more </button>:""}
   {allCountries.length>1 ? <button className="m-3 btn w-25 btn-danger" onClick={less}> less</button>:""}
   </div>

   </div></>
  )
}

export default AllCountries