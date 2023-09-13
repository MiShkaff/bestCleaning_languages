import { NavLink } from 'react-router-dom'
import '../../../UI/header/header.scss'
const HeaderLeng = () => {
  return (
    <div className='header__lengs'>
      <div className="header__leng">
        <NavLink to='/arm'>հայ/</NavLink>
        {/* <NavLink to='/dry-cleaning'>{props.data.data[15].attributes.SelectLinkName}</NavLink> */}
      </div>
      <div className="header__leng">
      <NavLink to='/'>eng/</NavLink>
      </div>
      <div className="header__leng">
        ру
      </div>
    </div>
  )
}

export default HeaderLeng
