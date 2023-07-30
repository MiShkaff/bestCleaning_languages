import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './dropdown.scss'
const Dropdown = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);
  let path = '/dropdown/'
  return (
    <div className='dropdown'>
      <div className="dropdown-btn" onClick={
        (e) => setIsActive(!isActive)}>{selected}</div>
      {isActive && (
        <div className="dropdown-content">
            <div onClick={(e) => {
                {setSelected('React')}
                // setIsActive(false)
            }}
            className="dropdown-item">
                <NavLink to='/react' >React</NavLink>
            </div>
            <div onClick={(e) => {
                {setSelected('Vue')}
                // setIsActive(false)
            }}
            className="dropdown-item">
                <NavLink to='/vue'>Vue</NavLink>
            </div>
            <div onClick={(e) => {
                {setSelected('Angular')}
                // setIsActive(false)
            }}
            className="dropdown-item">
                <NavLink to='/angular'>Angular</NavLink>
            </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown



  // function Selecter({opened,onClose}) {
  //   useEffect(() => {
  //     if(!opened) return;
  //     const handleClick = (e) => {
  //       if(!selectRef.current) return;
  //       if(!selectRef.current.contains(e.target)) {
  //         onclose()
  //       }
  //     }
  //     document.addEventListener('click', handleClick)
  //     return() => {
  //       document.remove('click', handleClick)
  //     }
  //   })
  // }