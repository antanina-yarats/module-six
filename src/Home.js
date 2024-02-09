import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function Home() {

    const[clothes, setClothes] = useState(data);

    const buttonFilter = (searchTerm) => {
        const newList = data.filter(element => element.searchTerm === searchTerm);
        setClothes(newList);
    }

    return (
        <div>
            <div className='cont'>
                <h1>Standard Free Shipping</h1>
            </div>
            <Buttons buttonBridge={buttonFilter} setStateBridge={()=> setClothes(data)}/>
            <Clothes bridge={clothes}/>
            
        </div>
    )
}

export default Home;