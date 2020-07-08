import React from 'react';
import Dog from './componentes/Dog/Dog.jsx';
import './Home.css'
import Fade from 'react-reveal/Fade';

const Home = ({ history }) => {
    return (
        <div className='home-dogbot-container'>
            <div className='home-dogbot-content'>
                <Dog history={history} />
                <div className='home-dogbot-greeting'>
                    <Fade opposite>
                        <h1> ¡Hola Humano! </h1>
                    </Fade>
                    <Fade  opposite>
                    <label> ¿Queres Charlar? </label>
                    <label> ¡Si deseas hablar haz click sobre mi! </label>
                    </Fade>
                </div>
            </div>
        </div >
    )
};
export default Home;
