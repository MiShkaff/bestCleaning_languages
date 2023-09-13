import './main.scss'
import MainBig from '../../fixed/mainBig/mainBig'
const Main = (props) => {
  return (
    <MainBig partnersData={props.partnersData} servicesData={props.servicesData} mainData={props.mainData}/>
   )
 }

export default Main
