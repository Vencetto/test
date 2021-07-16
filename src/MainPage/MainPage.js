import React, { useState } from 'react';
import { RaceItem } from '../RaceItem/RaceItem.js';
import * as SC from './MainPage.sc';

const SERVER_URL = 'ws://testapi.marit.expert:3004'; 

function MainPage() {
    const socket = new WebSocket(SERVER_URL);
    const [chars, setChars] = useState([]);

    socket.onopen = function() {
        socket.send({cmd:"get_list"});
        socket.onmessage = (message) => {
            setChars(Array.from(JSON.parse(message.data)));
        };
    }

    return (
        <SC.MainContainer>
            <SC.ColContainer>
                {
                    chars.map(el => <RaceItem character={el} key={el.id} />)
                }
            </SC.ColContainer>
        </SC.MainContainer>
    )
}

export default MainPage;