import React from 'react';
import ImageCard from '../image-card/ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => {
    
    const imageTags = images.map(image => {
        return <ImageCard image={image} />
    });

    return (
        <ul className='photo-grid'> 
            {imageTags}
        </ul>
    )
}

export default ImageList;