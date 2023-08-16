
import './App.css'
import ContactManager from './ContactManager'


function App() {
  const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
 console.log({contacts})
  return <>
    <h1>Contacts below</h1>
    <ContactManager data={contacts}/>
    </>
}

export default App
