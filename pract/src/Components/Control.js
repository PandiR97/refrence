import React from 'react';
import {useState} from 'react';

  
function Control() {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    setShowName(true);
  }
    
  return (
    <div className="App">
      <form>
        <label>Name:</label>
        <input name="name" value={name} 
          onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      {/* Checks the condition if showName is 
      true, which will be true only if 
      we click on the submit button */}
      {showName === true && 
      <p>You have submitted. Name: {name}</p>}
    </div>
  );
}


export default Control