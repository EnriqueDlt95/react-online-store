import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalog from './components/ProductCatalog'
import Filters from './components/Filters'

export default function App() {

  const [category, setCategory] = useState('all')

  return (
      <div>
        <Header></Header>

        <main style={{padding: '20px'}}>
          <Filters current={category} onChange={setCategory} />
           <Catalog categoria={category}></Catalog>
        </main>
        <Footer></Footer>
      </div>
  )
}


