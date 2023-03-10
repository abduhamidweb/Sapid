import React, { useState } from 'react'
import './index.scss'
import Header from '../../Layout/Header/Header'
import Hero from '../../components/Hero/Hero'
import Menu from '../../components/Menu/Menu'
const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
    </>
  )
}

export default index
