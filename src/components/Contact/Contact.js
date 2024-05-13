import { useEffect, useState } from "react";
import Input from "../forms/Input";
import Textarea from "../forms/Textarea";
import Button from "../forms/Button";
import "./Contact.css";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sendMsg, setSendMsg] = useState(["", false]);

    useEffect(() => {
        document.title = "Contact - Micah Baumann";
    }, []);

    const firebaseConfig = {
        apiKey: "AIzaSyC80sh4E7yKS7TLMS7pb7Rgx1csu1H6ioM",
        authDomain: "portfolio-form-c63b3.firebaseapp.com",
        databaseURL: "https://portfolio-form-c63b3-default-rtdb.firebaseio.com",
        projectId: "portfolio-form-c63b3",
        storageBucket: "portfolio-form-c63b3.appspot.com",
        messagingSenderId: "460401706928",
        appId: "1:460401706928:web:5c289161c913a045917875"
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        if (!e.target.name.value && !e.target.email.value && !e.target.subject.value && !e.target.body.value) {
            setSendMsg(["Error: Form empty", true]);
            setIsSubmitting(false);
        } else {
            push(ref(database, 'contacts'), {
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                body: e.target.body.value,
            }).then(() => {
                console.log("submited")
                setSendMsg(["Sent Successfully", false]);
                e.target.reset();
            }).catch((what) => {
                console.log("error")
                setSendMsg(["Error Sending", true]);
            }).finally(() => {
                setIsSubmitting(false);
            });
        }
    }

    return (
        <div className="contactDiv">
            <h1 className="pageTitle">Contact Me</h1>
            <div className="contactForm">
                <form className="contactForm" onSubmit={handleSubmit}>
                    <Input type="text" name="name" placeholderLabel="Your Name" className="formElement" disabled={isSubmitting} />
                    <Input type="text" name="email" placeholderLabel="Your Email" className="formElement" disabled={isSubmitting} />
                    <Input type="text" name="subject" placeholderLabel="Subject" className="formElement" disabled={isSubmitting} />
                    <Textarea name="body" className="formElement" innerReize="vertical" placeholderLabel="Message" rows="7" disabled={isSubmitting} ></Textarea>
                    <Button type="submit" disabled={isSubmitting}>Send</Button>
                </form>
                <p className={`sendMsg ${sendMsg[1] ? "sendError": ""}`}>{sendMsg[0]}</p>
            </div>
        </div>
    );
}
 
export default Contact;