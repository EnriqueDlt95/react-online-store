import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalog from './components/ProductCatalog'

export default function App() {

  return (
      <div>
        <Header></Header>

        <main style={{padding: '20px'}}>
           <Catalog></Catalog>
        </main>
        <Footer></Footer>
      </div>
  )
}


