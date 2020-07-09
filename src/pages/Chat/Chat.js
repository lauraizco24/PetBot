import React, { useState, useEffect } from 'react';
import './Chat.css';
import DogItem from './DogItem/DogItem.jsx';
import UserItem from './UserItem/UserItem';
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


    function firstResponse(name) {
        let newChat = {
            id: idCounter + 2,
            emitter: 'Dog',
            msg: ['Mucho gusto, ' + name + '!',
                'Mi nombre es Astro, souy un DogBot, aun en desarrollo ',
                'Eso quiere decir que aun no estoy preparado para preguntas especificas ',
                '¡Lo que no significa que no podamos interctuar!',
                'Haceme una pregunta de la lista y con gusto te respondere']
        }
        if (newChat) {
            setChat([...chat, newChat])
        }
    };

    useEffect(() => {
        //efecto
        if (chat.length === 2) {
            setTimeout(() => firstResponse(msg.msg));
            setMsg({ ...msg, msg: '' });
            //setTimeout( () => setOpenSelect(true), 600)

        }
    }, [chat]);


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
                        {chat.map((message, index) => {
                            if (message.emiter === 'Dog') {

                                return (<DogItem
                                    key={index}
                                    text={message.msg} />
                                );
                            } else {
                                return <UserItem
                                    key={index}
                                    text={message.msg} />;
                            }

                        }

                        )}

                    </div>
                    <div className='chatbot-chat-container-input'>
                        <InputChat
                            msg={msg}
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
