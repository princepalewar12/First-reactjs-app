import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import UseEffectHook from '../apiIntegration/UseEffectHook';
import ApiCallUsingUseEffect from '../apiIntegration/ApiCallUsingUseEffect';

function Home() {
    return (
        <>
            <h2>Home page</h2>
            <UseEffectHook/>
            <ApiCallUsingUseEffect/>
        </>
    )
}

export default Home;
