import React, {useState , useEffect} from 'react'
import './App.css';
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
// import ContactCard from "./Components/ContactCard";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactList = (contact) =>{
    setContacts([...contacts,contact]);
  }

  const deleteContact = () => {
    contacts.forEach((contact)=>{
      
    })

  }

  useEffect(()=>{
    let parsedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (parsedContacts) setContacts(parsedContacts);
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts));
  }, [contacts])
  
  return (
    <>
      <Header />
      <AddContact addContactList={addContactList} />
      <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </>
  );
}

export default App;
