import React from 'react';

const Partners = (props) => {
    // Проверяем наличие данных о партнерах
    if (props.partners && props.partners.data && props.partners.data.length > 0) {
        return (
            <div className='partners'>
                {props.partners.data.map((partner, index) => (
                    <img
                        key={index} // Используем уникальный ключ для каждого изображения
                        className='partnersImg'
                        src={`http://localhost:1337${partner.attributes.partnerImg.data.attributes.url}`}
                        alt={`Partner Image ${index}`} // Используем уникальный альтернативный текст
                    />
                ))}
            </div>
        );
    } else {
        return <p>Изображения не найдены</p>;
    }
}

export default Partners;
