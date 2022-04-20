import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => {
    
    return (
        <li key={image.id}>
                <img src={image.urls.regular} alt={image.alt_description} className='image' />
        </li>
    )
}

export default ImageCard;