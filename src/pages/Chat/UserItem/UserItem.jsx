import React from 'react';
import './UserItem.css';
import womanUser from '../../../assets/imagenes/avatarMujer.png'




const UserItem = ({text}) => {
    return (
        <div className='user-item-container'>
            <div className='user-item-message'>
            {text.map((t, index) =>
                    <label key={index} >{t}</label>
                )}
           
            </div>
            <img src={womanUser} alt='woman-user-avatar'/>
        </div>
    )
};
export default UserItem;