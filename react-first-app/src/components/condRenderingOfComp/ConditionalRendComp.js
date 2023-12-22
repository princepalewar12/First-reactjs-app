import React, { useState } from 'react'

 const ConditionalRendComp = () => {
    const[isLoggedIn, setLoggedIn] = useState(true);

    // 1. conditional rendering using if/else
    // if(isLoggedIn){
    //     return <Login/>
    // }else{
    //     return <SignUp/>
    // }

    // 2.conditional rendering using variable

    // let rendComponent;
    // if(isLoggedIn){
    //     rendComponent = <Login/>
    // }else{
    //     rendComponent = <SignUp/>
    // }
    // return rendComponent;

    // 3. condtional rendering using ternary operator

    // return isLoggedIn? <Login/>:<SignUp/>;

    //4. Conditional rendering using short circut
    
    return isLoggedIn && <Login/>

}
const Login = () =>{
    return(
        <>
            <h4>Login</h4>
            <p>User ID: <input type="text"></input></p>
            <p>Password: <input type='text'></input></p>
        </>
    )
}

const SignUp=()=>{
    return (
        <>
            <h4>signUp</h4>
            <p>Name: <input type="text"></input></p>
            <p>Number: <input type="number"></input></p>
            <p>User ID: <input type="text"></input></p>
            <p>Password: <input type='text'></input></p>
        </>
    )
}
export default ConditionalRendComp;