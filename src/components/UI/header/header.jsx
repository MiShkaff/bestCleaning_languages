import HeaderBig from "../../fixed/headerBig/headerBig"
// import Page from "./[id]"

const Header = (props) => {
  // console.log(props.data)
  return (
    <div className='header'>
      <HeaderBig data={props.data} />
      {/* <Page data={props.data} /> */}
    </div>
  )
}

export default Header