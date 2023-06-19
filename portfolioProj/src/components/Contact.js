import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "emailjs-com";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUodate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const sendEmail = () => {
    const messageParams = {
      message: JSON.stringify(formDetails),
    };

    // Return the Promise itself
    return emailjs
      .send(
        "service_yh6nnn2",
        "template_ezdlrdv",
        messageParams,
        "zeyURu7y3uMtLH4lK"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        return response.status; // Return the status code
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        return 0; // Return a default status code (0 or any other value you prefer) for error cases
      });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setButtonText('Sending...');

  //     try {
  //       const statusCode = await sendEmail(); // Wait for the sendEmail() function to complete

  //       setButtonText('Send');
  //       setFormDetails(formInitialDetails);

  //       if (statusCode === 200) {
  //         setStatus({ success: true, message: 'Message sent successfully' });
  //       } else {
  //         setStatus({ success: false, message: 'Something went wrong. Please try again later.' });
  //       }
  //     } catch (error) {
  //       console.log('Error sending email:', error);
  //       setStatus({ success: false, message: 'Something went wrong. Please try again later.' });
  //     }

  //     console.log("Email sent");
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    if (
      formDetails.firstName === "" ||
      formDetails.lastName === "" ||
      formDetails.email === "" ||
      formDetails.phone === "" ||
      formDetails.message === ""
    ) {
      // Display an alert if any field is missing
      alert("Please fill in all the required fields");
      return;
    }

    setButtonText("Sending...");

    try {
      const statusCode = await sendEmail();

      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (statusCode === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.log("Error sending email:", error);
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }

    console.log("Email sent");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUodate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUodate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUodate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUodate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    id="message"
                    row={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUodate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
