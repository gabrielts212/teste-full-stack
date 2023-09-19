import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Login from '../components/login/Login'
import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <div>
   <Header/>
   <Login/>
   <Footer/>
    </div>
  )
}
