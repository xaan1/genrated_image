
import React from 'react'
import Header from '../components/Header'
import Work from '../components/Work'
import Ai from '../components/Ai'
import Testminials from '../components/Testminials'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Work />
        <Ai />
        <Testminials />
        <Footer />
    </div>
  )
}

export default Home