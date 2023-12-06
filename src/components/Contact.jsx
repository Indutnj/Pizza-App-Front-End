import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
//import {  Table } from "react-bootstrap";
//import { FiPhoneCall } from "react-icons/fi";
//import { ImMobile } from "react-icons/im";
//import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h3>Contact Us</h3>
            <p>
              We value your feedback and are here to assist you. If you have any
              questions, concerns, or suggestions, please feel free to reach out
              to us. <br/><br/>Here are the ways you can contact pizzafactory:
            </p>

            <h3>Customer Support:</h3>
            <p>
              For assistance with orders, delivery, or general inquiries, our
              customer support team is available 24/7.
            </p>
            <p>Email: support@pizzafactory.com<br/>Phone: 897654321</p>
            <h3>Business Inquiries:</h3>
            <p>
              If you are a business partner, potential collaborator, or have
              business-related questions, please contact our business
              development team.
            </p>
            <p>Email: business@pizzafactory.com<br/>Phone: 987654321</p>

            <h3>Address:</h3>

            <p>
              If you prefer traditional mail, you can send correspondence to our
              headquarters:
            </p>
            <p>
              Pizza Factory Headquarters,<br/>123,Main Road,<br/>EB Colony,<br/>Kumbakonam,
              Tamil Nadu, 612002,India.
            </p>
            <h3>Social Media:</h3>
            <p>
              Stay connected with us on social media for updates, promotions,
              and more.
            </p>
            <p>
              Facebook: https://facebook/pizzafactory <br/>
              Twitter: https://twitter/pizzafactory<br/>
              Instagram: https://instagram/pizzafactory
            </p>
            <h3>Feedback:</h3>
            <p>
              We strive to respond to all inquiries promptly. Thank you for
              choosing Pizza Factory!
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="images/FarmhousePizza.jpg"
              style={{ width: "100%", height: "50%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
