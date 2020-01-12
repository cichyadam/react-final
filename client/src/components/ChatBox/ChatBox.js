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
            <div className="chatbox">
                {(chatHistory.length) ? chatHistory.map((m, i) => <span><div className="message" key={i}>{m}</div><br/></span>) : null}
            </div>
            <div className="input-wrapper input-chatbox">
                <input onChange={(evt) => setMessage(evt.target.value)} placeholder="What's on your mind?" value={message}/>
                <button className="btn btn-prim" onClick={handleSend}>Send</button>
            </div>
        </div>
    )
};

export default ChatBox;
