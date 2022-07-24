import React from 'react'
import ContactCard from './ContactCard';

export default function ContactList(props) {
    const myStyle = {
      margin: "0px 0px 10px 10px",
      borderBottom: "5px solid green",
      width: "60%",
      paddingBottom: "10px",
    };
  return (
    <>
        <div className="contact-list" style={myStyle}>
            <h2>Contact List</h2>
        </div>
        <div className="contacts">
            {props.contacts.map((contact)=>{
                return (
                    <ContactCard key={contact.name} contact={contact} deleteContact={props.deleteContact}/>
                )
            })}
        </div>

    </>
  );
}
