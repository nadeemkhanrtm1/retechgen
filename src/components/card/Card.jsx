import React from 'react';

const Card = ({src,title,alt}) => {
    return (
        <div className="card">
            <img src={src} alt={alt} className="card-img"/>
            <h3>{title}</h3>
        </div>
    )
}

export default Card
