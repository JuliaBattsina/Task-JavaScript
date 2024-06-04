import React, { useState } from 'react';
import './App.css';
import Inform from './Inform';
import MyForm from './MyForm';

function App() {
  const [wordSubmitted, setWordSubmitted] = useState('');

  const handleSubmitForm = (inputValue, selectValue) => {
    setWordSubmitted({ inputValue, selectValue });
  };

  return (
    <div className="App">
      <MyForm onSubmit={handleSubmitForm} />
      <Inform wordSubmitted={wordSubmitted} />
    </div>
  );
}

export default App;