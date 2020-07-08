import React, { useState } from 'react';
import './Chat.css';
import DogItem from './DogItem/DogItem.jsx';
import UserItem from './UserItem/UserItem.jsx';
import InputChat from './InputChat/InputChat.jsx'

const Chat = () => {

    let idCounter = 0;


    const [msg, setMsg] = useState({});

    const [chat, setChat] = useState([
        {
            id: 0,
            emiter: 'Dog',
            msg: ['¡Hola!', '¿Como es tu nombre?']
        }
    ]);

    function getMeMessage(value) {
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter,
            emitter: 'User',
            msg: value
        })
    };

    function sendMessage(e) {
        e.preventDefault(); // evita que la pagina se refresque al enviar el mensaje en el input
        setChat([...chat, msg])
    };

    console.log(' chat:', chat)
    console.log('msg:', msg)

    return (
        <div className='chatbot-chat-container'>
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        {chat.map((message, index) =>
                            message.emiter === 'Dog' ?
                                <DogItem key={index} text={message.msg} />
                                :
                                <UserItem key={index}
                                    text={message.msg} />

                        )}

                    </div>
                    <div className='chatbot-chat-container-input'>
                        <InputChat
                            getMeMessage={getMeMessage}
                            sendMessage={sendMessage}
                        />

                    </div>

                </div>

            </div>

        </div>
    )
};

export default Chat;
