import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h3>Who we are</h3>
        <p>
            Welcome to Pizza Factory, where passion for pizza meets the convenience of modern technology. At Pizza Factory, we believe that delicious pizza should be just a few taps away. Our mission is to make the pizza ordering and delivery experience seamless, enjoyable, and, of course, incredibly tasty.
        </p>
        <h3>Our Story</h3>
        <p>
        Pizza Factory was born out of a love for pizza and a desire to simplify the way people order and enjoy their favorite slices. The founders, pizza enthusiasts themselves, envisioned a platform that would connect hungry customers with the best local pizzerias, offering a diverse range of flavors and options.
        </p>
        <h3>What Sets Us Apart</h3>
        <Row>
          <Col md={4}>
            <p>
            <i>Quality Ingredients:</i> We partner with local pizzerias that share our commitment to quality ingredients. Every pizza is crafted with care, using the freshest and finest components.
            </p>
          </Col>
          <Col md={4}>
            <p>
            <i>Easy Ordering:</i> With our user-friendly app, ordering your favorite pizza is as easy as pie. Browse through menus, customize your order, and track your delivery in real-time.
            </p>
          </Col>
          <Col md={4}>
            <p>
            <i>Swift Delivery:</i> We understand that hunger can't wait. Our dedicated delivery team ensures that your piping-hot pizza arrives at your doorstep as quickly as possible.
            </p>
          </Col>
        </Row>
        <Row>
          <h3>Our Values</h3>
          <Col md={6}>
          <i>Customer Satisfaction:</i> Your satisfaction is our top priority. We work tirelessly to provide excellent customer service, address your concerns, and make every pizza experience delightful.
          </Col>
          <Col md={6}>
         <i>Local Support:</i> Pizza Factory is proud to support local businesses. By partnering with neighborhood pizzerias, we contribute to the growth and success of our communities.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
