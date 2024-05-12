import { useEffect } from "react";
import Input from "../forms/Input";
import Textarea from "../forms/Textarea";
import Button from "../forms/Button";
import "./Contact.css";
// import database from "./firebase";
// import { ref, set } from "firebase/database";
// import axios from "axios";


const Contact = () => {
    useEffect(() => {
        document.title = "Contact - Micah Baumann";
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        // axios.post("https://portfolio-form-c63b3-default-rtdb.firebaseio.com/contact.json", {
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     subject: e.target.subject.value,
        //     body: e.target.body.value,
        // }).then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        
        // set(ref(database, '/'), {
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     subject: e.target.subject.value,
        //     body: e.target.body.value,
        // });
        // const contact = database.ref("contacts").push();
        // {
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     subject: e.target.subject.value,
        //     body: e.target.body.value,
        // }
        // database.ref(`newContacts/${}`)
        console.log(e.target.name.value);
    }

    return (
        <div className="contactDiv">
            <h1 className="pageTitle">Contact Me</h1>
            <div className="contactForm">
                <form className="contactForm" onSubmit={handleSubmit}>
                    <Input type="text" name="name" placeholderLabel="Your Name" className="formElement" />
                    <Input type="text" name="email" placeholderLabel="Your Email" className="formElement" />
                    <Input type="text" name="subject" placeholderLabel="Subject" className="formElement" />
                    <Textarea name="body" className="formElement" innerReize="vertical" placeholderLabel="Subject" rows="7" ></Textarea>
                    <Button type="submit">Send</Button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;