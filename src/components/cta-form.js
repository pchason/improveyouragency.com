/** @jsx jsx */
// This is what we'll use to navigate to the custom success page
// More on this here: https://www.gatsbyjs.org/docs/gatsby-link/#how-to-use-the-navigate-helper-function
import { jsx } from "theme-ui"
import { navigate } from "gatsby"
import { useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri"

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const CTAForm = (props) => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/download-agency-readiness-checklist/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    <div>
      <form
        className="contact-form"
        action="/"
        name="agency-acquisition-readiness-checklist"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="agency-acquisition-readiness-checklist" />
        <input type="hidden" name="bot-field" />
        <p>
          <label>First Name<br/>
            <input type="text" name="firstname" onChange={handleChange} required />
          </label>
        </p>
        <p>
          <label>Last Name<br/>
            <input type="text" name="lastname" onChange={handleChange} required />
          </label>
        </p>
        <p>
          <label>Email<br/>
            <input type="email" name="email" onChange={handleChange} required />
          </label>
        </p>
        <p style={{textAlign:'center'}}>
          <button
            className="button"
            sx={{
              variant: "variants.buttonBlueCTA",
            }}
            type="submit"
          >
            Get Agency Readiness Checklist{" "}
            <span className="icon -right">
              <RiSendPlane2Line />
            </span>
          </button>
        </p>
      </form>
    </div>
  );
}

export default CTAForm
