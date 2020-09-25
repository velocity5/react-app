import React, { Component } from "react";
import { Nav, Navbar, Form, Badge } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Image from "react-bootstrap/Image";

class Menu extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="bg-menu">
          <Navbar.Brand to="/">
            <Image
              src="https://velocity5.github.io/zigtoys/images/icon/logo3.jpg"
              fluid
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>
            <Form className="form-inline form-search my-2 my-lg-0">
              <div className="searchBar">
                <input type="text" placeholder="Tìm kiếm" />
                <Link className="searchLink" to="#">
                  <SearchIcon className="search-icon" />
                </Link>
              </div>
            </Form>
            <div className="wrap-all justify-content-lg-end">
              <div className="userLogin">
                <Link
                  className="nav-link dangnhap"
                  to="login.html"
                  title="Đăng Nhập"
                >
                  <AccountCircleIcon />
                </Link>
              </div>
              <div className="cart-wrapper">
                <Link className="btn cart-icon" to="cart.html">
                  <Badge className="badge-pill-red">0</Badge>
                  <ShoppingCartIcon />
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Menu;
