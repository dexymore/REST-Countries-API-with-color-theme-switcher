import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export let Themecontext=createContext("dark")
function Themecontextprovide(props)
{
function changeTheme()
{
    Theme==="dark"?setTheme("light"):setTheme("dark");

}

const[Theme,setTheme] =useState("dark")
const [countries, setcountries] = useState([]);

async function CountriesData() {
  
      const countries = await axios.get("https://restcountries.com/v3.1/all");
      setcountries(countries.data);

  }
useEffect(() => {
CountriesData();

},[]);


return<Themecontext.Provider value={{Theme ,changeTheme,countries,setcountries}}>
{props.children}
</Themecontext.Provider>

}





export default  Themecontextprovide;