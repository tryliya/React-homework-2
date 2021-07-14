import React, {useState} from 'react';



const MyBouquet = () => {
    const flowers = [
        {name: 'rose', id:1},
        {name: 'chamomile', id:2},
        {name: 'aster', id:3},
        {name: 'tulip', id:4},
        {name: 'carnation', id:5},
        {name: 'gerbera', id:6},
        {name: 'lily', id:7},
        {name: 'iris', id:8},
    ]
    const initialState = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    }

    const [ checkedFlowers, setChecked ] = useState(initialState);
    const [ counter, setCounter ] = useState(0);
    
    const plus = (isChecked) => {
        isChecked ? setCounter(counter + 1) : setCounter(counter - 1)        
    }

    return (
        <div>
            <p>Make your own bouquet</p>
            {flowers.map((item) => <div key={item.id}> 
            <input 
            type='checkbox' 
            onChange={() => {                
                if(counter < 5 || checkedFlowers[item.id]) {
                    const checkedFlower = {};
                    checkedFlower[item.id] = !checkedFlowers[item.id]
                    setChecked({...checkedFlowers, ...checkedFlower});
                    plus(!checkedFlowers[item.id]);  
                }
            }} 
            checked={checkedFlowers[item.id]}/> {item.name} </div>)}
            { counter < 5 ?
            <p>You have chosen <b>{counter}</b> flowers</p> : <p> You can choose only 5!</p>}
        </div>
    )
}

export default MyBouquet;