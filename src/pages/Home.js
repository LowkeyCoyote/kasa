import React from 'react'
import Banner from '../components/Banner/Banner'

import bannerHome from '../assets/img/bannerHome.png'
import GridCard from '../components/GridCard/GridCard'

export default function Home() {

  return (
    <>
    <Banner
    bannerImg={bannerHome}
    bannerText="Chez vous, partout et ailleurs"
    />
    <GridCard />
    </>
  )
}
