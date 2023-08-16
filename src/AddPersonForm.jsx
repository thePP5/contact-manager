
import { useState} from "react";
import PropTypes from 'prop-types';

export default function AddPersonForm(props) {
    const [person, setPerson ] = useState('')
 

    function handleChange(e) {
      setPerson(e.target.value);
    }

    function handleSubmit(e) {
      props.handleSubmit(person);
      setPerson('');
      e.preventDefault();
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Add new contact" 
          onChange={handleChange} 
          value={person} />
        <button type="submit">Add</button>
      </form>
    );
  }

  // PropTypes validation
AddPersonForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };