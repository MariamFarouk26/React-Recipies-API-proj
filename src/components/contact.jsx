import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/ContactUs.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q4wqgaa",
        "template_yovkzln",
        e.target,
        "SG1rXVywNAqmxp6X6"
      )
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
      });

    setEmail("");
    setSubject("");
    setMessage("");
    setName("");
  };

  return (
    <div id="contactUs" className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">User Name :</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address :</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject :</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={subject}
                onChange={handleSubjectChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message :</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success my-3 mb-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
