import React from 'react';

function MyComponent() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Register Form</h2>
      <input type="text" onChange={handleChange} />
      <button>Submit</button>
    </div>
  );
}

export default MyComponent;