import React from 'react'
import Header from '../en/UI/header/header'
import Main from '../en/UI/main/main'
import Footer from '../en/UI/footer/footer'

const PageArm = (props) => {
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

export default PageArm
