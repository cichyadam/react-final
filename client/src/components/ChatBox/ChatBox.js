import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8081');

const ChatBox = (props) => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSend = () => {
        socket.emit('I need help', { message })
        setMessage('')
    }

    useEffect(() => {
        socket.on('user said', data => {
            const message = decodeURIComponent(data.message)
            setChatHistory(chat => [...chat, message])
        })
    }, [])

    return (
        <div className="float_box float-right float-bottom">
            <h2>We are here to help you, {props.name}</h2>
            <div>
                {(chatHistory.length) ? chatHistory.map((m, i) => <div key={i}>{m}</div>) : null}
            </div>
            <input onChange={(evt) => setMessage(evt.target.value)} placeholder="What's on yur mind?" value={message}/>
            <button onClick={handleSend}>Send</button>
        </div>
    )
};

export default ChatBox;
