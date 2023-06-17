import React, { useEffect, useState, useRef,useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Target.css'
import { UserContext } from '../../App';


const Target = () => {

    const valor = useContext(UserContext);

    console.log(valor.urlContext);
    



    const params = useParams();
    const navigate = useNavigate();
    const [targetInfo, setTargetInfo] = useState(null);
    let ref = useRef(null);
    useEffect(() => {
        const getData = async (url = "") => {
            try {
                const response = await fetch(url);
                const responseJson = await response.json();
                setTargetInfo(responseJson);
            } catch (err) {
                console.log(err);
            }
        }
        return () => getData(`http://localhost:3030/api/v1/${params.id}`);
    }, []);


    return (
        <section className='Target' >

            <div ref={ref} className='target-imgs-content' >
                {targetInfo === null ? <div className='img-content' ><img src="" className='img' /></div> : targetInfo.imgs.map((img) => <div className='img-content' key={img} > <img className='img' src={img} onClick={(e) => ref.current.firstElementChild.firstElementChild.src = e.target.src} /> </div>)}
            </div>
            <div className='target-description' >
                <div className='target-info-title' >{targetInfo !== null ? targetInfo.title : null}</div>
                <div className='target-info-desc' >
                    <ul>
                        {targetInfo !== null ? targetInfo.descripcion.map(desc => {
                            return (
                                <li key={desc} >{desc}</li>
                            );
                        }) : null}
                    </ul>
                </div>
                <div className='target-info-value' >
                    {targetInfo !== null ? targetInfo.pvp : null}
                </div>

            </div>
            <button onClick={()=> navigate(-1)} >
                volver
            </button>
        </section>
    );

}

export default Target;