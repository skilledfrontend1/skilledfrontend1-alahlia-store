import Head from 'next/head'
import Home from '../pages'

import CheckOut  from '../pages/checkout'

export default function Main() {
  return (
    <div >
    

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <CheckOut />

     <Home />  
   
    </div>
  )
}