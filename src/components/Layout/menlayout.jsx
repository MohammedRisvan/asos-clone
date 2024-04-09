import React from 'react'
import Navber from './navbar'
import Footer from './footer'
import {Outlet} from "react-router-dom";
function Manlayout() {
  return (
    <div>
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Manlayout
