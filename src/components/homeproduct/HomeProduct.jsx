import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Lists } from "../data/Lists";

const HomeProduct = () => {
  const renderItem = Lists.map((lists, i) => {
    return (
      <Col xs={12} md={4} key={lists.id} className="space__firstrow">
        <Link to="./products" className="img-link">
        <Card className="thumb-card">
            <Card.Img
              variant="top"
              src={lists.url}
              alt={lists.title}
              className="product-image"
            />
          <Card.Body>
            <Card.Title className="text-center">
              {lists.title}
            </Card.Title>
            <div className="content-bottom">
              <div className="group-rate">
                <p className="price">{lists.price}đ</p>
              </div>
              <div className="group-btn">
                <button className="btn btn-icon-left">
                  <ShoppingCartIcon className="add-cart"></ShoppingCartIcon>
                </button>
                <button className="btn btn-icon-right">
                  <FavoriteBorderIcon />
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
        </Link>
      </Col>
    );
  });
  return renderItem;
};

export default HomeProduct;
