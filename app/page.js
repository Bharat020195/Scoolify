import React from 'react'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Banner from '../components/Banner'
import Apply from '../components/Apply'
import Country from '../components/Country'
import Services from '../components/Services'
import Footer from '../components/Footer'
import './globals.css'

const page = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <Banner />
      <Apply />
      <Country />
      <Services />
      <Footer />

    </div>
  )
}

export default page