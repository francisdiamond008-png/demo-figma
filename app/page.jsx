import React from 'react'
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Activity from "./components/Activity"
import Login from "./components/Login"
import Downloadsection from "./components/Downloadsection"
import Footer from "./components/Footer"

function page() {
  return (
    <div>
<Hero />
      <Features />
      <Integration />
      <Activity/>
      <Login/>
      <Downloadsection/>
      <Footer/>
    </div>
  )
}

export default page