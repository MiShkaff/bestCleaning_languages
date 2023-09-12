import React from 'react'
import Header from '../UI/header/header'
import Main from '../UI/main/main'
import Footer from '../UI/footer/footer'

const PageEn = (props) => {
  return (
    <div>
        <Header 
            data={props.data} 
            aboutSelected = {props.aboutSelected} 
            aboutSetSelected={props.aboutSetSelected} />
        <Main mainData={props.mainData} partnersData={props.partnersData} />
        <Footer />
    </div>
  )
}

export default PageEn
