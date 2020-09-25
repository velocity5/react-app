import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "../assets/css/style.css";
import SlickSlider from "../components/slider/SlickSlider";
import HomeProduct from "../components/homeproduct/HomeProduct";

class Home extends Component {
  render() {
    document.title = "Home"
    return (
      <>
        <div className="slider_top">
          <SlickSlider />
        </div>
        <Container>
          <div className="section-title">
            <h2>Sản phẩm hiện có</h2>
            <hr className="below" />
          </div>
          <Row>
            <HomeProduct />
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
