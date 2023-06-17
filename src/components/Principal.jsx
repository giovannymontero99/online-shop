import React from 'react';
import './Principal.css';
import Slider from './Principal-components/Slider';

const Principal = () =>{
    return(
        <section className='Principal' >
            <div>
                <Slider></Slider>
            </div>
        </section>
    );
}

export default Principal;