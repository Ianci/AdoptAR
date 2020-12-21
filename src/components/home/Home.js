import React from 'react'
import { Adoption } from '../sections/adoption/Adoption'
//Material
import { ContainerDiv } from '../../styles/components/home/home'
import { Header } from '../header/Header'


export const Home = () => {
    
    return (
        <ContainerDiv>
          <header>
            <Header />
          </header>
          <main>
          <Adoption />
          </main>
          <footer>

          </footer>
        </ContainerDiv>
    )
}
