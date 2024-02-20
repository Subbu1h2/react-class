
// import React, { useState } from "react";
// import "./App.css";

// const NumberInput = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const inputValue = e.target.value;

//     if (/^\d+$/.test(inputValue)) {
//       if (inputValue.length === 8) {
//         setValue(inputValue);
//         setError("");
//       } else {
//         setValue(inputValue);
//         setError("Please enter exactly 8 digits.");
//       }
//     } else {
//       setError("Please enter numbers only.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!value) {
//       setError("please enter a value.");
//     } else if (error) {
//       alert(error);
//     } else {
//       console.log("Submitted value:", value);
//     }
//   };

//   //hi

//   return (
//     <div className="main-container">
//       <form onSubmit={handleSubmit}>
//         <center>
//           <input
//             type="text"
//             value={value}
//             onChange={handleChange}
//             placeholder="Enter 8-digit number"
//             maxLength={8}
//           />
//           <br></br>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <button type="submit">Submit</button>
//         </center>
//       </form>
//     </div>
//   );
// };

// export default NumberInput;



import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const App = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [persons, setPersons] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber) {
      alert('Please fill out all fields');
      return;
    }
    const newPerson = { name, phoneNumber };
    setPersons([...persons, newPerson]);
    setName('');
    setPhoneNumber('');
  };

  return (
    <div className="container">
      <div className="center">
        <h2>Add Person</h2>
        <form onSubmit={handleSubmit}>
          
          <table className='form-table'>
            <tr>
              <td> &emsp;Name</td>
              <td> : &nbsp; 
              <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /></td>
            </tr>
            
            <td>Phone Number:</td>
            <td>: &nbsp;
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            /></td>
          </table>
          <br></br>
          <center>
          <button type="submit">Save</button>
          </center>
        </form>
      </div>

      <h2>Persons</h2>
      <table className='person-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
