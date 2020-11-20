import React from 'react';

function SliderImages({src}) {
    const imgStyle = {
        width: 100+"%",
        height: "auto",
    }
    return(
        <img src={src} alt="slide-img" style={{imgStyle}}></img>
    )
}

export default SliderImages;