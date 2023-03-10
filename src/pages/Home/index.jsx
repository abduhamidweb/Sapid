import React, { useState } from 'react'
import './index.scss'
import Header from '../../Layout/Header/Header'
import Hero from '../../components/Hero/Hero'
import Menu from '../../components/Menu/Menu'
import Cards from '../../components/Cards/Cards'
import Express from '../../components/Express24/Express'
const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Cards />
      <Express/>
    </>
  )
}

export default index
