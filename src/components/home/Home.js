import React from 'react'
import { Adoption } from '../sections/adoption/Adoption'
import { Carrousel } from '../sections/carrousel/Carrousel'
import { dataCarrousel } from '../sections/carrousel/Data'
//Material

import { Header } from '../header/Header'


export const Home = () => {
    
    return (
          <>
          <header>
            <Header />
          </header>
          <main  style={{background: "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)"}}>
         
          <Adoption />
          <Carrousel slides={dataCarrousel}/>
          </main>
          <footer>

          </footer>
       </>
    )
}
