import React, { useState } from "react";

const FormBasics = () => {

  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[email, setEmail] = useState('')

  const handleFormData =(e)=>{
    alert(`Form Submited`);
    console.log("Inside handleFormData");
    e.preventDefault()
  }
  const handleFirstNameChange=(e)=>{
    console.log(e.target.value);
    setFirstName(e.target.value);
  }
  const handleLastNameChange=(e)=>{
    console.log(e.target.value);
    setLastName(e.target.value);
  }
  const handleEmailChange=(e)=>{
    console.log(e.target.value);
    setEmail(e.target.value);
  } 
  return (
    <>
      <h2>Basics of form handling</h2>
      <form onSubmit={handleFormData}>
      <div>
      first name: <input type="text" name="" id="" onChange={handleFirstNameChange} value={firstName}/>
      </div>
      <br />
      <div>
      last name: <input type="text" name="" id="" onChange={handleLastNameChange}  value={lastName}/>
      </div>
      <br />
      <div>
        Email: <input type="text" name="" id="" onChange={handleEmailChange}  value={email}/>
      </div>
      <br />
      <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormBasics;
