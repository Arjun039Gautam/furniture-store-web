import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" /><br /><br />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" /><br /><br />

        <label>Message:</label><br />
        <textarea rows="4" placeholder="Write your message"></textarea><br /><br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
