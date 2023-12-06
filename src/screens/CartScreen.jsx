import React from "react";
import { Container, Row, Col ,Image} from "react-bootstrap";
//import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h3>My Cart</h3>
          {cartItems.map((item, index) => (
            <Row key={index} className="mb-3">
              <Col md={8}>
                <h5>
                  {item.name} [{item.varient}]
                </h5>
                <p>
                  Price: {item.quantity} X {item.prices[0][item.varient]} = {item.price}
                </p>
                <div className="d-flex align-items-center">
                  <FaMinusCircle
                    className="text-danger mr-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity - 1, item.varient));
                    }}
                  />
                  {item.quantity}
                  <FaPlusCircle
                    className="text-success ml-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1, item.varient));
                    }}
                  />
                </div>
              </Col>
              <Col md={4} className="text-right">
                <Image
                  src={item.image}
                  alt={item.name}
                  thumbnail
                  style={{ maxWidth: "80px", maxHeight: "80px" }}
                />
                <FaTrash
                  className="text-danger mt-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                  }}
                />
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <div className="bg-light p-3">
            <h3>Payment Information</h3>
            <h4>Total Amount: RS {subTotal}/-</h4>
            <Checkout subTotal={subTotal} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
