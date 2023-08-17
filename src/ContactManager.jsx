import { useState } from "react";
import AddPersonForm from "./AddPersonForm";
import PeopleList from "./PeopleList";
import PropTypes from "prop-types";

//main component function receives prop called 'data' an array of initial contacts
//data retrieved from the local storage otherwise props.data is used
export default function ContactManager(props) {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("arr");
    const initialArr = JSON.parse(saved);
    console.log(initialArr);
    return initialArr || props.data;
  });


  //this function is passed to the 'AddPersonForm' component as the 'handleSubmit' prop
  //triggers a re-render with the updated list of contacts.
  function addPerson(name) {
    setContacts([...contacts, name]);
    console.log(...contacts, name);
  }


  //tihs function is passed to the 'PeopleList' component as the 'handleDelete' prop.
  //updates the 'contacts' state with the 'updatedData' after deletion
  function handleDelete(updatedData) {
    setContacts(updatedData);
    localStorage.setItem("arr", JSON.stringify(updatedData));
  }


  //render two components AddPersonForm and PeopleList 
  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} handleDelete={handleDelete} />
    </div>
  );
}

ContactManager.propTypes = {
  data: PropTypes.array.isRequired,
};
