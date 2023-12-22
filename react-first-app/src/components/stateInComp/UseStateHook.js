import { useState } from "react";

const UseStateHook = () => {
    // const[state Name, function to update state] = useState(initial value of state)

    const [name, updateName] = useState('Pawan');

    const [count, updateCount] = useState(0);

    const [person, updatePerson] = useState({name:"PRINCE", Age:"26"})

    const [isLoggedIn, setLoggedIn] = useState(false);

    const [arrayValue, updateArray] = useState([1,2,3,4,5])

    const nameChange = () => {
        updateName("Palewar")
    }

    const changeCount=()=>{
        updateCount(count+1)
    }

    const changePerson=()=>{
        updatePerson(prePerson => ({...prePerson, name:"Rahul"}))
    }

    const changeArray=()=>{
        updateArray(arrayValue => ([...arrayValue, 6,7,8,9]))
    }
    return (
        <>
            <h2>Use state Hook(Function Component)</h2>
            <p>Name Is: {name}</p>
            <button type="button" class="btn btn-secondary" onClick={nameChange}>Change Name</button>

            <p>Count Is: {count}</p>
            <button type="button" class="btn btn-info" onClick={changeCount}>Count++</button>
            
            <p>Person Is: {JSON.stringify(person)}</p>
            <button type="button" class="btn btn-success" onClick={changePerson}>Count++</button>
            
            <p>Is LoggedIn: {isLoggedIn?"Yes":"NO"}</p>
            <button type="button" class="btn btn-success" onClick={changePerson}>Count++</button>

            <p>The values are:{arrayValue.join(",")}</p>
            <button type="button" class="btn btn-success" onClick={changeArray}>Update Array</button>
        </>
    )
}

export default UseStateHook;