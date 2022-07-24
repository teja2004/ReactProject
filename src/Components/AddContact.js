import React , {useState} from 'react'
import "./CSS/AddContact.css";

export default function AddContact(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");

    const formSubmit = (e) =>{
        e.preventDefault();
        props.addContactList({name : name , email : email});
        setName("");
        setEmail("");
        
    }

  return (
    <>
        <div className="form">
            <div className="head">
                <h2>Create New Contact</h2>
            </div>
            <form className="form-field" onSubmit={formSubmit}>
                <div className="name">
                    <label htmlFor="name" className="name-label">Full Name : </label>
                    <input type="text" name="name" value={name} required
                    onChange={(e)=>{setName(e.target.value)}} id="name" placeholder='John Doe'/>
                </div>
                <div className="email">
                    <label htmlFor="email" className="email-label">Email : </label>
                    <input type="email" required name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" placeholder="name@email.com"/>
                </div>
                <div className="submit">
                    <input type="submit" value="Add" style={{padding : "8px 25px",fontSize : "20px",backgroundColor : "green",color : "whitesmoke" , borderRadius : "15px",margin : "10px 0px 0px 0px" , cursor:"pointer"}} />
                </div>
            </form>
        </div>
    </>
  )
}
