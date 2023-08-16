import PropTypes from 'prop-types';
import {useEffect } from 'react';

function PeopleList(props){
     //const [arr,setArr] = useState(props.data);
    const arr= props.data;
    console.log(arr);


    useEffect(()=>{
        localStorage.setItem('arr',JSON.stringify(arr));
    },[arr])

    // const listItems=arr.map((val,index)=>
    // <li key={index}>{val}</li>
    // )

    // return<>
    // <ul>{listItems}</ul>
    // </>

    const handleDelete = (index) =>{
        const updatedData = arr.filter((_,i)=> i !== index)
        localStorage.setItem('arr',JSON.stringify(updatedData))
        arr.handleDelete(updatedData)
    }

    return<>
        <div className='contactTable'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead> 
                <tbody>
                    {arr.map((contact,index)=>{
                        return(
                            <tr key={index}>
                                <td>{contact}</td>
                                <td>{new Date().toDateString()}</td>
                                <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
}
export default PeopleList;

PeopleList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
  };