import React from 'react';


// this component used for contacting us
const Contact = () => {
  return (
    <>
    <div className="pt">
    Contact Us
    </div>
    <form >
      <input
        type="text"
        placeholder="Enter city name"
        className="form-container"
        value="enter your name"
       
      />
       <input
        type="text"
        placeholder="Enter city name"
        className="form-container"
        value="enter your age"
       
      />
       <input
        type="text"
        placeholder="Enter city name"
        className="form-container"
        value="enter your email address"
       
      />
       <input
        type="text"
        placeholder="Enter city name"
        className="form-container"
        value="enter your email query"
       
      />
      
    </form>
    <button type="submit">Submit Details</button>
    </>
  );
};

export default Contact;