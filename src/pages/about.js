import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => {
  return (
    <>
      <Layout>
        <SEO title="About Me" />
        <div className="about-text">
          <img
            id="profile-pic"
            src="https://res.cloudinary.com/kndshein/image/upload/c_crop,g_north,h_867,w_734/v1609575414/Project%20One/About/IMG_0469_tdsdwo.jpg"
            alt="Selfie of Kaung"
          />
          <h2>
            My name is Kaung Nan Dar Shein.
            <br />
            You can call me Kaung <span>(/'kɒŋ/)</span>.
          </h2>
          <p>
            I am a graphic designer and an aspiring software engineer with a
            background in Biochemistry and Studio Art. After graduating from
            Beloit College, a small liberal arts college in Wisconsin, I worked
            in the chemical industry before pursuing software engineering
            full-time. <br />
            <br />
            As a designer, I strive for intuitive user-interface designs with
            the just the right balance of form vs. function. In this day and
            age, beautiful design should be accessible to anyone.
            <br />
            <br />
            In my free time, you can find me putting games in my wishlist but
            not actually playing them.
          </p>
        </div>
        <div className="about-form-container">
          <h4>The world's burning, let's connect!</h4>
          <div className="about-form">
            <form name="submit-to-google-sheet" autoComplete="off">
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
                  placeholder="What we swingers were going against were uptight squares like you whose bag was money and world domination. We were innocent, man. If we had known the consequences of our sexual liberation, we would've done things much differently but the spirit would remain the same. It's freedom baby."
                  required
                ></textarea>
              </div>
              <button
                id="about-form-button"
                type="submit"
                // onClick="this.blur();"
              >
                Submit
              </button>
            </form>
            <div id="form-thank" className="form-thank">
              <div id="form-thank-text" className="form-thank-text">
                Thanks for reaching out! I'll get back to you in a jiffy.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
