import '../../../UI/header/header.scss'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const HeaderList = () => {
  const [aboutUsIsActive, aboutUsSetIsActive] = useState(false);
  const [galleryIsActive, gallerySetIsActive] = useState(false);
  const [servicesIsActive, servicesSetIsActive] = useState(false);
  const selectRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if(!selectRef.current.contains(e.target)) {
        aboutUsSetIsActive(false)
        gallerySetIsActive(false)
        servicesSetIsActive(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return() => {
      document.removeEventListener('mousedown', handler)
    }
  })
  return (
    <ul className='headerList'>
      <li className="headerList__item">
        <NavLink className='headerList__link' to='main'>Главная</NavLink>
      </li>
      <li className="headerList__item">
        <div className="dropdown">
          <div className="dropdown__btn" onClick={(e) => aboutUsSetIsActive(!aboutUsIsActive)}>О нас</div>
          {aboutUsIsActive && (
            <div className='dropdown__content' ref={selectRef}>
              <div className='dropdown__item'  onClick={(e) => {
                // {aboutSetSelected('О компании')}
                aboutUsSetIsActive(false)
              }}>
                <NavLink to='/about-company'>О компании</NavLink>
              </div>
              <div className='dropdown__item' onClick={(e) => {
                // {aboutSetSelected('Наши работы')}
                aboutUsSetIsActive(false)
              }}>
                <NavLink to='/our-works'>Наши работы</NavLink>
              </div>
              <div className='dropdown__item' onClick={(e) => {
                // {aboutSetSelected('Оборудование и химия')}
                aboutUsSetIsActive(false)
              }}>
                <NavLink to='/chemistry'>Оборудование и химия</NavLink>
              </div>
              <div className='dropdown__item' onClick={(e) => {
                // {aboutSetSelected('Вакансии')}
                aboutUsSetIsActive(false)
              }}>
                <NavLink to='/vacancies'>Вакансии</NavLink>
              </div>
            </div>
          )}
        </div>
      </li>
      <li className="headerList__item">
        <div className="dropdown">
          <div className="dropdown__btn" onClick={(e) => {gallerySetIsActive(!galleryIsActive)}}>Галерея</div>
          {galleryIsActive && (
            <div className="dropdown__content" ref={selectRef}>
              <div className='dropdown__item' onClick={(e) => { 
                // {aboutSetSelected('До и после')}
                gallerySetIsActive(false)
              }}>
                <NavLink to='/before-and-after'>До и после</NavLink>
              </div> 
              <div className='dropdown__item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                gallerySetIsActive(false)
              }}>
                <NavLink to='/our-team'>Наша команда</NavLink>
              </div>
            </div>
          )}
        </div>
        {/* <NavLink className='headerList__link' to='gallery'>Галерея</NavLink> */}
      </li>
      <li className="headerList__item">
      <div className="dropdown">
          <div className="dropdown__btn" onClick={(e) => {servicesSetIsActive(!servicesIsActive)}}>Наши услуги</div>
          {servicesIsActive && (
            <div className="dropdown__content" ref={selectRef}>
              <div className='dropdown__item' onClick={(e) => { 
                // {aboutSetSelected('До и после')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/places'>Дома, коттеджи, дачи и квартиры</NavLink>
              </div> 
              <div className='dropdown__item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/ofice'>Производство и офис</NavLink>
              </div>
              <div className='dropdown__item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/window-cleaning'>Мойка окон и витрин</NavLink>
              </div>
              <div className='dropdown__item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/after-repair'>После ремонта и строительства</NavLink>
              </div>
              <div className='dropdown__item' onClick={(e) => {
                // {aboutSetSelected('Наша команда')}
                servicesSetIsActive(false)
              }}>
                <NavLink to='/dry-cleaning'>Химчистка ковров и мягкой мебели</NavLink>
              </div>
            </div>
          )}
        </div>
        {/* <NavLink className='headerList__link' to="services">Наши услуги</NavLink> */}
      </li>
      <li className="headerList__item">
        <NavLink className='headerList__link' to="prices">Цены</NavLink>
      </li>
      <li className="headerList__item">
        <NavLink className='headerList__link' to="contacts">Контакты</NavLink>
      </li>
    </ul>
  )
}

export default HeaderList
