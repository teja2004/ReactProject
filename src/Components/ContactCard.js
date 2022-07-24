import React from 'react';
import "./CSS/ContactCard.css";
import contactIcon from "../Images/contactIcon.png"

export default function ContactCard(props) {
  return (
    <>
        <div className="card">
            <img src={contactIcon} alt="ContacterImage" />
            <div className="name-tag">
                <h3>Name : {props.contact.name}</h3>
            </div>
            <div className="email-tag">
                <p>Email : {props.contact.email}</p>
            </div>
            <button type="button" className="btn-delete" onClick={props.deleteContact}>Delete</button>
        </div>
    </>
  )
}
