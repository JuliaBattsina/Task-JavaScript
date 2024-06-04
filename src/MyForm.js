import { useState } from "react";
function MyForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('user');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue, selectValue); 
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Enter GitHub Username or Repository:</label><br />
      <input
        type="text"
        id="inputField"
        name="inputField"
        value={inputValue}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="selectType">Select type:</label><br />
      <select
        id="selectType"
        name="selectType"
        value={selectValue}
        onChange={handleSelectChange}
      >
        <option value="user">User</option>
        <option value="repo">Repository</option>
      </select><br /><br />

      <input type="submit" value="Submit" />
    </form>
  );
}
export default MyForm;