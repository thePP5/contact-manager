import {useState} from 'react';
import AddPersonForm from './AddPersonForm';
import PeopleList from './PeopleList';
import PropTypes from 'prop-types';

export default function ContactManager(props){
    const [contacts, setContacts] = useState(()=>{
      const saved = localStorage.getItem("arr");
      const initialArr = JSON.parse(saved)
      console.log(initialArr)
      return initialArr || props.data
    })

    function addPerson(name) {
      setContacts([...contacts, name]);
      console.log(...contacts,name)
    }


    function handleDelete(updatedData) {
      setContacts(updatedData);
      localStorage.setItem('arr', JSON.stringify(updatedData));
    }

  
    return (
      <div>
        <AddPersonForm handleSubmit={addPerson} />
        <PeopleList data={contacts} handleDelete={handleDelete}/>
      </div>
    );
}

ContactManager.propTypes ={
    data:PropTypes.array.isRequired,
}