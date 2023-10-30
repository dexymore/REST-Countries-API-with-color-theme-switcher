
function chooseCountry(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomObject = data[randomIndex];
 return randomObject;
}

function handleCountruesToChooseFrom(data, candidateCountry) {
    const countries = [candidateCountry];
    while (countries.length < 4) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomObject = data[randomIndex];
      if (!countries.includes(randomObject)) {
        countries.push(randomObject);
      }
    }
  
    countries.sort(() => Math.random() - 0.5);
    return countries;
  }
  



export  {handleCountruesToChooseFrom,chooseCountry}
