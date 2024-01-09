import React, { useEffect, useRef, useState } from "react";

const AdvanceForm = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    color: "",
    date: "",
    range: "20",
    file: null,
    radioOption: "",
  });

  const nameRef = useRef()
  const emailRef = useRef()
  const handleFormData = (e) => {
    alert(`Form Submited`);
    console.log("Inside handleFormData");
    e.preventDefault();
  };
  const handleChange = (event) => {
    console.log(event);
    const { name, value, type, files } = event.target;
    console.log(`Name:${name}, Value:${value}`);
    setForm((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value
    }));
  };
  useEffect(()=>{
    nameRef.current.focus()
    emailRef.current.focus()
  })
  return (
    <>
      <h1>Advance React Form Handling</h1>

      <form onSubmit={handleFormData}>
        <div>
          <label htmlFor="firstName">
            First Name:{" "}
            <input
              type="text"
              name="fname"
              value={form.fname}
              onChange={handleChange}
              required
              ref={nameRef}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="lastName">
            Last Name:{" "}
            <input
              type="text"
              name="lname"
              value={form.lname}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              ref={emailRef}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="color">
            Colors:{" "}
            <input
              type="color"
              name="color"
              value={form.color}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="date">
            Date:{" "}
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="range">
            Date:{" "}
            <input
              type="range"
              name="range"
              value={form.range}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="options">
            Options:{" "}
            <select
              type="options"
              name="options"
              value={form.range}
              onChange={handleChange}
              required
            >
              <option value="">Please Select The Options</option>
              <option value="java">Java</option>
              <option value="react">React</option>
              <option value="bootstrap">BootStrap</option>
              <option value="javascript">JavaScript</option>
            </select>
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="files">
            file Upload:
            <input type="file" name="file" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Choose an option:</label>
          <input
            type="radio"
            name="radioOption"
            value="option1"
            checked={form.radioOption === "option1"}
            onChange={handleChange}
          />{" "}
          Option 1
          <input
            type="radio"
            name="radioOption"
            value="option2"
            checked={form.radioOption === "option2"}
            onChange={handleChange}
          />{" "}
          Option 2
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AdvanceForm;
