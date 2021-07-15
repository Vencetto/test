import { RaceItem } from '../RaceItem/RaceItem.js';
import * as SC from './MainPage.sc';

let arr = [ { id:1, name:"Frodo", race:"Hobbit" },
            { id:2, name:"Aragorn", race:"Human" },
            { id:3, name:"Gimli", race:"Dworf" },
            { id:4, name:"Legolas", race:"Elf" }
          ]

function MainPage() {
  return (
    <SC.MainContainer>
      <SC.ColContainer>
        {
          arr.map(el => <RaceItem character={el} />)
        }
      </SC.ColContainer>
    </SC.MainContainer>
  )
}

export default MainPage;
