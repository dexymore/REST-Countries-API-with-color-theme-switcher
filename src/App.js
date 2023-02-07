
import './App.css';
import AllCountries from './all countries/allCountries';
import ItemDetails from './ItemDetails/ItemDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Notfound from './notfound/Notfound';
import Themecontextprovide from './context/context';

let routes= createBrowserRouter([
  {path: '/' ,element: <Layout></Layout>,errorElement:<Notfound></Notfound> ,children:[
    {index:true,element:<AllCountries></AllCountries>},
    {path:'country/:name' , element:<ItemDetails></ItemDetails>},


  ] }
])

function App() {


  return(
  <div className='App'>
  <Themecontextprovide><RouterProvider router={routes}></RouterProvider></Themecontextprovide>
</div>)
}

export default App;
