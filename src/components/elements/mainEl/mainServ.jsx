import React from 'react';
import '../../UI/main/main.scss';

const MainServ = (props) => {
  const itemsToRender = props.mainData.data.slice(1); 
  return (
    <div className='mainServ'>
      <h2 className="mainServ__head">{props.mainData.data[0].attributes.title}</h2>
        {itemsToRender.map((el, index) => (
          <div className='mainServ__descBlock' key={index}>
            <p className='mainServ__desc'>{el.attributes.description}</p>
          </div>
        ))}
    </div>
  );
}

export default MainServ;
