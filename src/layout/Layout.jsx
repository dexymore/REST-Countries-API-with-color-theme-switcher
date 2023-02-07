import React from 'react'
import {Outlet} from 'react-router-dom'

import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
function Layout() {
  return (
    <>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
    </>
  )
}

export default Layout