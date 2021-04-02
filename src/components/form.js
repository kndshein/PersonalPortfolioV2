import React from "react";

const Form = () => {
  const [formSubmit, setFormSubmit] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.GATSBY_GOOGLE_SHEETS}`, {
      method: "POST",
      body: new FormData(document.forms["submit-to-google-sheet"]),
    }).then(setFormSubmit(true));
    // .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="about-form-container">
      <h4>The world's burning, let's connect!</h4>
      <div className="about-form">
        <form
          name="submit-to-google-sheet"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="form-field">
            <label htmlFor="form-name">Name</label>
            <input
              id="form-name"
              name="Name"
              type="text"
              placeholder="Austin Powers"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="form-email">Email</label>
            <input
              id="form-email"
              name="Email"
              type="email"
              placeholder="manofmystery@shagadelic.spy"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="form-message">Message</label>
            <textarea
              id="form-message"
              name="Message"
              placeholder="What we swingers were going against were uptight squares like you whose bag was money and world domination. We were innocent, man. If we had known the consequences of our sexual liberation, we would've done things much differently but the spirit would remain the same. It's freedom, baby."
              required
            ></textarea>
          </div>
          <input id="about-form-button" type="submit" value="Submit" />
        </form>
        <div className={`form-thank ${formSubmit ? "clicked" : ""}`}>
          <div className={`form-thank-text ${formSubmit ? "clicked" : ""}`}>
            Thanks for reaching out! I'll get back to you in a jiffy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
