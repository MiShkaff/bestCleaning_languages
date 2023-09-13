import React from 'react';
import '../../../UI/footer/footer.scss'
const FooterLeftCard = (props) => {
  return (
    <div className='footerLeftCard'>
      <h3 className="footerLeftCard__head">
        {props.items && props.items.length === 0 ? (
          <a href="" className="footerLeftCard__head">
            {props.title}
          </a>
        ) : (
          props.title
        )}
      </h3>
      {props.items && props.items.length > 0 && (
        <ul className="footerLeftCard__list">
          {props.items.map((item, index) => (
            <li className="footerLeftCard__item" key={index}>
              <a href="" className="footerLeftCard__link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FooterLeftCard;