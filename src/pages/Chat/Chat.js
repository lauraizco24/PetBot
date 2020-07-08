import React, { useState } from 'react';
import './Chat.css';
import DogItem from './DogItem/DogItem.jsx';
import UserItem from './UserItem/UserItem.jsx';
import InputChat from './InputChat/InputChat.jsx'

const Chat = () => {

    const [msg, setMsg ] = useState({});

    const [ chat , setChat ] = useState([
        {
            id: 0,
            emiter: 'Dog',
            msg: ['¡Hola!', '¿Como es tu nombre?']
        }
    ]);

    return (
        <div className='chatbot-chat-container'>
            <div className ='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        { chat.map((message, index) =>
                        message.emiter ==='Dog' ?
                        <DogItem key={index} text = 'Hola, Que tal?'/>
                        :
                        <UserItem key={index} text='Todo bien'/>

                        )}

                        
                       
                    </div>
                    <div className = 'chatbot-chat-container-input'>
                       <InputChat/> 

                    </div>

                </div>

            </div>

        </div>
    )
};

export default Chat;
