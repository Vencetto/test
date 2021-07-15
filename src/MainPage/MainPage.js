import React, { useEffect } from 'react';
import { RaceItem } from '../RaceItem/RaceItem.js';
import * as SC from './MainPage.sc';

const SERVER_URL = 'ws://testapi.marit.expert:3004'; 
// const arr = [ { id:1, name:"Frodo", race:"Hobbit" },
//             { id:2, name:"Aragorn", race:"Human" },
//             { id:3, name:"Gimli", race:"Dworf" },
//             { id:4, name:"Legolas", race:"Elf" }
//           ]

function MainPage() {
    const socket = new WebSocket(SERVER_URL);
    let arr = [];

    socket.onopen = function() {
        socket.send({cmd:"get_list"});
        socket.onmessage = (message) => { arr = message.data };
    }

    useEffect(() => console.log('here'), [arr]);

    return (
        <SC.MainContainer>
            <SC.ColContainer>
                {
                    arr.map(el => <RaceItem character={el} id={el.id} />)
                }
            </SC.ColContainer>
        </SC.MainContainer>
    )
}

export default MainPage;
