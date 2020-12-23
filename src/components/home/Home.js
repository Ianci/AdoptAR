import React from 'react'
import { Adoption } from '../sections/adoption/Adoption'
import { Carrousel } from '../sections/carrousel/Carrousel'
import { dataCarrousel } from '../sections/carrousel/Data'
import { Footer } from '../../components/footer/Footer'
//Material

import { Header } from '../header/Header'
import { Experiences } from '../sections/experiences/Experiences'


export const Home = () => {
    
    return (
          <>
          <header>
            <Header />
          </header>
          <main>
          <Adoption />
          <Carrousel slides={dataCarrousel}/>
          <Experiences />
          </main>
          <footer>
          <Footer />
          </footer>
       </>
    )
}
