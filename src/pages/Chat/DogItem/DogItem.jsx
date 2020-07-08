import React from 'react';
import './DogItem.css';
import dogAvatar from '../../../assets/imagenes/dog.png';


const DogItem = ({ text }) => {
    return (
        <div className='dog-item-container'>
            <img src={dogAvatar} alt='dog-avatar' />
            <div  className='dog-item-message'  >
                  
                    { text.length > 0  && text.map((message, index) =>
                        <label key={index}> {message} </label>
                        )}
                    </div>
                    </div>
    )
};
export default DogItem;