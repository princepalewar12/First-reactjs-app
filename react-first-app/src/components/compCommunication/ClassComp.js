import React, { Component } from 'react'

class ClassComp extends Component {
    render() {
        console.log(this.props);
        const {myName, company, employeeObj} = this.props;
        return (
            <>
                <h1>Class Comp Communication</h1>
                <h3>My Name: {myName}</h3>
                <h3>My Name: {company}</h3>
                Employee Details: {JSON.stringify(employeeObj)}
            </>
        )
    }
}
export default ClassComp