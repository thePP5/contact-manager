import { useState } from "react";
import PropTypes from "prop-types";

export default function AddPersonForm(props) {
  //state variable person willl hold the value of input field
  const [person, setPerson] = useState("");

  //this function will be called when ever the value of input field changes
  //receives the e paramater which updates the '[person' state variable
  function handleChange(e) {
    setPerson(e.target.value);
  }

  //passed as a function prop to the component'props.handleSubmit(person'
  //current value of 'person'  state variable as an argument
  //this function is expected to handle the submission of the new contact data
  //then 'person' state variable is reset to an empty string
  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }

  //whenever the form is submitted 'handleSubmit' will be called
  //value attribute of the input field set to 'person' state variable.
  //ensuring the input field value is controlled by component's state

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
}

// PropTypes validation
AddPersonForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
