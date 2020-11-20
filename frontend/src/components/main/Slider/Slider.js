import React, {useState} from 'react';
import './Slider.css'
import SliderImages from './SliderImages';

import i1 from './images/img1.png';
import i2 from './images/img2.png';
import i3 from './images/img3.png';
import i4 from './images/img4.png';
import i5 from './images/img5.png';


function Slider() {
    let sliderArray = [
        <SliderImages src={i1}/>,
        <SliderImages src={i2}/>,
        <SliderImages src={i3}/>,
        <SliderImages src={i4}/>,
        <SliderImages src={i5}/>,
    ];
    const [x, setX] = useState(0);
    const btnLeft = () => {
        x === 0 ? setX(-100*(sliderArray.length -1)) : setX(x + 100);
    };
    const btnRight = () => {
        x === -100*(sliderArray.length -1) ? setX(0) : setX(x-100);
    };

    return(
        <div className="slider">
            { 
                sliderArray.map((item,index) => {
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })    
            }
            <button id="buttonLeft" onClick={btnLeft}>&lt;</button>
            <button id="buttonRight" onClick={btnRight}>&gt;</button>
        </div>
    )
}
export default Slider;