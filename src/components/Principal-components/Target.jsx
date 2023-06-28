import React from 'react';
import './Target.css';

const Target = (props) => {



    return (
        <div
            key={props.id === null ? null : props.id}
            className='target' >

            <div className='target-img-content' >
                <img
                    height="auto"
                    width="100%"
                    src={props.img === null ? null : props.img} />
            </div>

            <div className='target-info' >
                <div className='target-title' >
                    {props.title === null ? null : props.title}
                </div>
                <div className='target-footer' >
                    <div className='target-valor' >
                        ${props.pvp === null ? 0 : props.pvp }
                    </div>
                    <div 
                        style={{ display: 'flex', alignItems: 'center' }} 
                        onClick={() => props.buscarUnaTarjeta() === null ? null : props.buscarUnaTarjeta() }   >
                        <img src={props.visit === null ? null : props.visit } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Target;