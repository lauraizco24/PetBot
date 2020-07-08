import React from 'react';
import Lottie from 'react-lottie';
import animationDog from './Dog.json';
import './Dog.css';


const Dog = ({ history }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDog
    };

    function handleonClick() {
       history.push('/chat')

    };
    return (
        <div onClick={handleonClick} className='dog-container'>
            <Lottie options={defaultOptions} />

        </div>
    )
};
export default Dog;
