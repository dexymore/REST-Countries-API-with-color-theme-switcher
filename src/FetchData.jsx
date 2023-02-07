import axios from "axios";



 export async function CountryDetail(callback,filter){
let brdass=[]
    const countrydetails= await axios.get(`https://restcountries.com/v3.1/name/${filter} `)


    const [detail] =await countrydetails.data 
for(let i=0;i<detail.borders?.length;i++){
brdass[i]=await name(detail.borders[i])
}

    const content= {
        name:detail.name.official,
    img:detail.flags.png,
capital:detail.capital  ,
population:detail.population,
region:detail.region,
subregion:detail.subregion,
native:  detail.name.common,
tld:detail.tld[0],
timzone:detail.timezones[0],
un:detail.unMember,
borders:brdass,
    }
    

callback(content)


 }



export let name =  async function (filter){
    
    
    const countrydetails= await axios.get(`https://restcountries.com/v2/alpha?codes=${filter} `)
const [detail] =await countrydetails.data

return detail.name


 }

