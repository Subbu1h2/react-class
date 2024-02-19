// import React, { useState } from 'react';

// const NumberInput = () => {
//     const [value, setValue] = useState('');
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         const inputValue = e.target.value;
//         // Check if input value is a number and length is 8
//         if (/^\d*$/.test(inputValue) && inputValue.length === 8) {
//             setValue(inputValue);
//             setError('');
//         } else {
//             setValue('')
//             setError('Please enter up to 8 digits only.');
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (error) {
//             alert(error);
//         } else {
//             // Handle submission logic here
//             console.log('Submitted value:', value);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={value}
//                 onChange={handleChange}
//                 placeholder="Enter up to 8-digit number"
//             />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default NumberInput;

import React, { useState } from "react";
import "./App.css";

const NumberInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d+$/.test(inputValue)) {
      if (inputValue.length === 8) {
        setValue(inputValue);
        setError("");
      } else {
        setValue(inputValue);
        setError("Please enter exactly 8 digits.");
      }
    } else {
      setError("Please enter numbers only.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setError("please enter a value.");
    } else if (error) {
      alert(error);
    } else {
      console.log("Submitted value:", value);
    }
  };

  //hi

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <center>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter 8-digit number"
            maxLength={8}
          />
          <br></br>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Submit</button>
        </center>
      </form>
    </div>
  );
};

export default NumberInput;
