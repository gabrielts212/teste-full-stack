import Beerlist from '@/components/beerlist/Beerlist'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Beerlist/>
      <Footer/>
    </div>
  )
}

export default page