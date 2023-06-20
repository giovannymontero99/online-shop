import React, { useEffect, useState, useRef } from 'react';
import './Slider.css'
import visit from '../../assets/visit.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'

const Slider = () => {
    const [next, setNext] = useState(null);
    const [previus, setPrevius] = useState(null);
    const [pages, setPages] = useState(null);
    const [targets, setTargets] = useState([]);
    const [targetData, setTargetData] = useState(null);
    const [defaultImg, setDefaultImg] = useState(null);
    const ref = useRef(null);

    const getData = async (url) => {
        url === null ? url = `https://backend-390023.rj.r.appspot.com/api/v1/?offset=0&limit=20` : url;
        try {
            const response = await fetch(url);
            const responseJson = await response.json();
            setPages(responseJson.total);
            setNext(responseJson.next);
            setPrevius(responseJson.previus);
            setTargets(responseJson.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getData(null);
    },[]);


    const getOneData = async (targetId) => {
        try {
            const response = await fetch(`https://backend-390023.rj.r.appspot.com/api/v1/${targetId}`);
            const responseJson = await response.json();
            setTargetData(responseJson)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <section id='welcome' className='welcome-section' >
                <h1>Tecnologia Manizales</h1>
                <p>Toda la tecnologia al alcance de tu mano.</p>
            </section>
            <section className='products-inicio' >
                <h3>Lo nuevo para ti:</h3>
                <img src="https://cdn.shopify.com/s/files/1/0742/5897/2969/files/CamaraA68cuadrada_1066x.png?v=1685476214" alt="Cámara dual para carro" />
            </section>


            {
                targetData === null ?
                    null :
                    <div className='target-data-section' >
                        <div >
                            <div onClick={() => { setTargetData(null); setDefaultImg(null) }} className='hamburges-close-container' >
                                <div className='hamburges hamburger--collapse is-active' >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </div>
                            </div>

                            {<img ref={ref} src={defaultImg === null ? targetData.imgs[0] : defaultImg} className='target-data-img-principal' />}
                            <div className='target-data-img-section' >
                                {targetData.imgs.map((src, index) => <img className='target-data-img' src={src} key={index} onClick={e => { setDefaultImg(e.target.src) }} />)}
                            </div>
                            <div className='target-data-info' >
                                <div className='target-data-title' >
                                    {targetData.title}
                                </div>
                                <div className='target-data-codigo' >
                                    {targetData.codigo}
                                </div>
                                <ul className='target-data-ul-section' >
                                    {targetData.descripcion.map((desc, index) => <li className='target-data-desc' key={index} >✔ {desc}</li>)}
                                </ul>

                                <div>
                                    {targetData.pvp}
                                </div>
                            </div>


                        </div>

                    </div>
            }

            <div className='targets-content' >
                {targets.length === 0 ? <div></div> : targets.map(target => {
                    return (
                        <div key={target.id} className='target' >
                            <div className='target-img-content' ><img src={target.imgs[0]} /></div>
                            <div className='target-info' >
                                <div className='target-title' >{target.title}</div>
                                <div className='target-footer' >
                                    <div className='target-valor' >${target.pvp}</div>
                                    <div style={{ display: 'flex', alignItems: 'center' }} onClick={e => getOneData(target.id)}   >
                                        <img src={visit} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            </div>
            <div className='pages-section' >
                <div onClick={() => getData(previus)} >
                    ◀
                </div>
                <div onClick={() => getData(next)} >
                    ▶
                </div>
            </div>
            <footer className='footer-section' >
                <div>
                    <p>Puedes apoyarme en mis redes sociales:</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/giovanny.carvajal.543/">
                        <img src={facebook} alt="facebook logo" />
                    </a>
                    <a href="https://www.instagram.com/giovannycarvajal1106/">
                        <img src={instagram} alt="instagram logo" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=573134973973">
                        <img src={whatsapp} alt="whatsapp logo" />
                    </a>
                </div>
            </footer>
        </>
    );

}

export default Slider;