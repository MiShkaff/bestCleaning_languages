import React from 'react'
import MainServices from './mainServices/mainServices'
import MainHero from './mainHero/mainHero'
import '../../UI/main/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainServ from '../../elements/mainEl/mainServ';
import Gallery from '../../UI/gallery/gallery';
import Services from '../../UI/services/services';
import Partners from '../../elements/partners/partners';
import Contacts from '../../UI/contacts/contacts';
import Header from '../../UI/header/header';
const MainBig = (props) => {
  return (
      <div>
          <MainHero />
            <div className='main-services__contentBlock'>
              <MainServices />
              <Routes>
                {/* <Route path='/' element={<Header data={props.data} />}/> */}
                <Route path='/' element={<MainServ mainData={props.mainData} />} />
                {/* <Route path='/about-company' element={<AboutCompany />}/> */}
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/services' element={<Services />}/>
                <Route path='/partners' element={<Partners partners={props.partnersData} />}/>
                <Route path='/contacts' element={<Contacts />}/>
                {/* <Route path='/partners' */}
              </Routes>
            </div>
      </div>

  )
}

export default MainBig
