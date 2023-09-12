import React from 'react'
import HeaderBig from './headerBig/headerBig'
import MainBig from './mainBig/mainBig'

const Fixed = () => {
  return (
    <div>
      <HeaderBig />
      <MainBig servicesData={props.servicesData} mainData={props.mainData} />
    </div>
  )
}

export default Fixed
