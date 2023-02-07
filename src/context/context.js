import { createContext, useState } from "react";

export let Themecontext=createContext("dark")
function Themecontextprovide(props)
{
const[Theme,setTheme] =useState("dark")
function changeTheme()
{
    Theme==="dark"?setTheme("light"):setTheme("dark");

}
return<Themecontext.Provider value={{Theme ,changeTheme}}>
{props.children}
</Themecontext.Provider>

}
export default  Themecontextprovide;