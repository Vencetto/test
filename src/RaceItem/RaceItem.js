import React from 'react';
import * as SC from './RaceItem.cs';

export function RaceItem({ character }) {
    return (
        <SC.RaceContainer>
            <SC.ImageContainer></SC.ImageContainer>
            <SC.Name>{character.name}</SC.Name>
            <SC.Race>{character.race}</SC.Race>
        </SC.RaceContainer>
    );
}