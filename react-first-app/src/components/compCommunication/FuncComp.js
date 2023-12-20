import React from 'react'

function FuncComp(props) {
    const { myName, company, employeeObj } = props;
    return (
        <>
            <h1>Function component communication</h1>
            <h3>{myName}</h3>
            <h3>{company}</h3>
            <h4>
                Employee Details: {JSON.stringify(employeeObj)}
            </h4>
        </>
    )
}

export default FuncComp                 