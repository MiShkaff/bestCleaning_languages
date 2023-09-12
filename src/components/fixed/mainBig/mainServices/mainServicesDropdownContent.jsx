import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../UI/main/main.scss'
const MainServicesDropdownCentent = (props) => {
  const itemsToRender = props.servicesData.data.slice(1);

  // Массив состояний для каждого элемента
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // Функция для открытия дропдауна
  const openDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  // Функция для закрытия дропдауна
  const closeDropdown = () => {
    setOpenDropdownIndex(null);
  };

  return (
    <div className="main-services">
      <h2 className="main-services__head">{props.servicesData.data[0].attributes.head}</h2>
      <ul className="main-services__list">
        {itemsToRender.map((el, index) => (
          <li
            key={index}
            className='main-services__item'
            onMouseEnter={() => openDropdown(index)}
            onMouseLeave={closeDropdown}
          >
            <div className="main-services__item-header">
              {el.attributes.item}
            </div>
            <div className={`main-services__dropdown ${openDropdownIndex === index ? 'open' : ''}`}>
              {/* Используйте переданный контент вместо "item" */}
              {props.dropdownContents[index] && props.dropdownContents[index].map((item, subIndex) => (
                <NavLink className='main-services__dropdown-item'
                  key={subIndex}
                  href={`/your-custom-path/${index}/${subIndex}`} // Замените на нужный путь
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainServicesDropdownCentent;