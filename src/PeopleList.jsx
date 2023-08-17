import PropTypes from "prop-types";
import { useEffect, useState } from "react";

//main function to receives a prop called 'data' an array of contact names
function PeopleList(props) {
  const [arr, setArr] = useState(props.data); //to update the ui instantly
  //// const arr= props.data; before using the state, the ui doesn't update with out reloading the page
  console.log(arr);

  //to store the contacts into the local storage
  //updates the UI instantly
  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(arr));
  }, [arr]);

  //this useEffect monitor on props.data, the child prop will get correct value from state.And will get updated instantly.
  //synchronizing with props
  useEffect(() => {
    setArr(props.data);
  }, [props.data]);

  //to delete the contact individually
  const handleDelete = (index) => {
    const updatedData = arr.filter((_, i) => i !== index);
    localStorage.setItem("arr", JSON.stringify(updatedData)); //to update the localstorage after deleting
    setArr(updatedData);
    //arr.handleDelete(updatedData)
  };

  return (
    <>
      <div className="contactTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>{contact}</td>
                  <td>{new Date().toDateString()}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default PeopleList;

PeopleList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
