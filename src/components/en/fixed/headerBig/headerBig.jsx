import React from 'react'
import HeaderList from '../../fixed/headerBig/headerList/headerList'

import HeaderLeng from './headerLeng/headerLeng'
import HeaderLogo from './headerLogo/headerLogo'
const HeaderBig = (props) => {
  // console.log(props.data)
  return (
    <div className='header__big'>
        <HeaderLogo />
        <HeaderList
          data={props.data} 
          aboutSelected = {props.aboutSelected} 
          aboutSetSelected={props.aboutSetSelected} 
        />
        <HeaderLeng />
    </div>
  )
}

export default HeaderBig