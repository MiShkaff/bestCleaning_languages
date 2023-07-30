import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import Header from './components/UI/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/UI/about/about'
import Gallery from './components/UI/gallery/gallery'
import Services from './components/UI/services/services'
import Prices from './components/UI/prices/prices'
import Contacts from './components/UI/contacts/contacts'
import Main from './components/UI/main/mainHero'
import Dropdown from './components/elements/dropdown/dropdown';
import AboutCompany from './components/UI/about/aboutCompany/aboutCompany';
function App(props) {
  const [selected, setSelected] = useState("Choose one") // simple dropdown
  const [aboutSelected, aboutSetSelected] = useState("") // about
  return (
    <BrowserRouter>
      <div className="App">
        <Header aboutSelected = {aboutSelected} aboutSetSelected={aboutSetSelected} />
          <Routes>
            <Route path='/main' element={<Main />}/>
            {/* <Route path='/about' element={<About />}/> */}
            {/* ABOUT */}

            <Route path='about-company' element={<AboutCompany />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/prices' element={<Prices />}/>
            <Route path='/contacts' element={<Contacts />}/>
          </Routes>
          <Dropdown path='/dropdown' selected = {selected} setSelected={setSelected} />
      </div>
    </BrowserRouter>
  );
}

export default App;
