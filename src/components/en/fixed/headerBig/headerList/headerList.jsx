import '../../../UI/header/header.scss'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { arrayContent } from '../../mainBig/mainBig'

const HeaderList = (props) => {
  const [aboutUsIsActive, aboutUsSetIsActive] = useState(false);
  const [galleryIsActive, gallerySetIsActive] = useState(false);
  const [servicesIsActive, servicesSetIsActive] = useState(false); 
  const selectRef = useRef();
  // useEffect(() => {
  //   let handler = (e) => {
  //     if(!selectRef.current.contains(e.target)) {
  //       aboutUsSetIsActive(false)
  //       gallerySetIsActive(false)
  //       servicesSetIsActive(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handler)
  //   return() => {
  //     document.removeEventListener('mousedown', handler)
  //   }
  // })
  return (
    <ul className='headerList'>
      <li className="headerList__item">
        <NavLink className='headerList__link' to='/'>{props.data.data[16].attributes.LinkName}</NavLink>
      </li>
      <li className="headerList__item">
        <div className="headerList__dropdown">
          <div className="headerList__dropdown-btn" onClick={(e) => aboutUsSetIsActive(!aboutUsIsActive)}>{props.data.data[0].attributes.LinkName}</div>
          {aboutUsIsActive && (
            <div className='headerList__dropdown-content' ref={selectRef}>
              <div className='headerList__dropdown-item'  onClick={(e) => {
                // {aboutSetSelected('О компании')}
                aboutUsSetIsActive(false)
              }}>
                <NavLink to='/about-company'>{props.data.data[5].attributes.SelectLinkName}</NavLink>
              </div>
              <div className='headerList__dropdown-item' onClick={(e) => {
                // {aboutSetSelected('Наши работы')}
                aboutUsSetIsActive(false)
              }}>
                <NavLink to='/our-works'>{props.data.data[6].attributes.SelectLinkName}</NavLink>
              </div>
              <div className='headerList__dropdown-item' onClick={(e) => {
                // {aboutSetSelected('Оборудование и химия')}
                aboutUsSetIsActive(false)
              }}>
                <NavLink to='/chemistry'>{props.data.data[7].attributes.SelectLinkName}</NavLink>
              </div>
              <div className='headerList__dropdown-item' onClick={(e) => {
                // {aboutSetSelected('Вакансии')}
                aboutUsSetIsActive(false)
              }}>
                <NavLink to='/vacancies'>{props.data.data[8].attributes.SelectLinkName}</NavLink>
              </div>
            </div>
          )}
        </div>
      </li>
      <li className="headerList__item">
        <div className="headerList__dropdown">
          <div className="headerList__dropdown-btn" onClick={(e) => {gallerySetIsActive(!galleryIsActive)}}>{props.data.data[1].attributes.LinkName}</div>
          {galleryIsActive && (
            <div className="headerList__dropdown-content" ref={selectRef}>
              <div className='headerList__dropdown-item' onClick={(e) => { 
                // {aboutSetSelected('До и после')}
                gallerySetIsActive(false)
              }}>
                <NavLink to='/before-and-after'>{props.data.data[9].attributes.SelectLinkName}</NavLink>
              </div> 
              <div className='headerList__dropdown-item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                gallerySetIsActive(false)
              }}>
                <NavLink to='/our-team'>{props.data.data[10].attributes.SelectLinkName}</NavLink>
              </div>
            </div>
          )}
        </div>
      </li>
      <li className="headerList__item">
      <div className="headerList__dropdown">
          <div className="headerList__dropdown-btn" onClick={(e) => {servicesSetIsActive(!servicesIsActive)}}>{props.data.data[2].attributes.LinkName}</div>
          {servicesIsActive && (
            <div className="headerList__dropdown-content" ref={selectRef}>
              <div className='headerList__dropdown-item' onClick={(e) => { 
                // {aboutSetSelected('До и после')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/places'>{props.data.data[11].attributes.SelectLinkName}</NavLink>
              </div> 
              <div className='headerList__dropdown-item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/ofice'>{props.data.data[12].attributes.SelectLinkName}</NavLink>
              </div>
              <div className='headerList__dropdown-item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/window-cleaning'>{props.data.data[13].attributes.SelectLinkName}</NavLink>
              </div>
              <div className='headerList__dropdown-item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/after-repair'>{props.data.data[14].attributes.SelectLinkName}</NavLink>
              </div>
              <div className='headerList__dropdown-item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/dry-cleaning'>{props.data.data[15].attributes.SelectLinkName}</NavLink>
              </div>
            </div>
          )}
        </div>
        {/* <NavLink className='headerList__link' to="services">Наши услуги</NavLink> */}
      </li>
      <li className="headerList__item">
        <NavLink className='headerList__link' to="partners">{props.data.data[3].attributes.LinkName}</NavLink>
      </li>
      <li className="headerList__item">
        <NavLink className='headerList__link' to="contacts">{props.data.data[4].attributes.LinkName}</NavLink>
      </li>
    </ul>
  )
}

export default HeaderList