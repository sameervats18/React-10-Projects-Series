import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState(" Sameer ");
    const [email, setEmail] = useState(" sam@gmail.com ");
    const [text, setText] = useState(" Let'sGo ");


    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

    }

    const onViaCallSubmit = () => {
        console.log("I am from call");
    }

    return <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
            </div>
            <Button
                isOutline={true}
                text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows="7" />
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "end",
                }}>
                    <Button text="SUBMIT" />
                </div>
                <div>{name + " " + email + " " + text}</div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src="/images/Service 24_7-pana 1.svg" alt="24x7" />
        </div>
    </section>;
};

export default ContactForm;