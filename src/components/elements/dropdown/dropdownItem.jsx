import React from 'react'
const DropdownItem = (props) => {
    let path = '/dropdown/'
  return (
    <NavLink to={path}>{props.selectOption}</NavLink>
  )
}

export default DropdownItem
