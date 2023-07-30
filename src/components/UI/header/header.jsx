import HeaderList from '../../elements/headerBig/headerList/headerList'
import HeaderLogo from '../../elements/headerBig/headerLogo/headerLogo'

const Header = (props) => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header__big">
                <HeaderLogo />
                <HeaderList aboutSelected = {props.aboutSelected} aboutSetSelected={props.aboutSetSelected} />
            </div>
        </div>
    </div>
  )
}

export default Header
