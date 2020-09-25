import React, { Component } from "react";
import { Link } from "react-router-dom";
import SocialLink from "./SocialLink";
import { Container, Row } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ display: "block" }}>
          <footer className="bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-xs-12 newsletter">
                  <h4 className="title-newsletter">Đăng ký nhận tin</h4>
                  <form action="#">
                    <div className="form-group subscribe-newsletter">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Nhập email của bạn"
                      />
                      <button className="btn btn-warning" type="submit">
                        Đăng Ký
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-3 col-xs-12 info-footer">
                  <h4 className="title-info-footer">Thông tin cửa hàng</h4>
                  <h5 className="add">
                    Địa chỉ: <span>123 Lương Định Của</span>
                  </h5>
                  <h5 className="phone">
                    Điện thoại: <span>(+84)1923-8564</span>
                  </h5>
                  <h5 className="mail">
                    Email: <span>support@zigtoys.com</span>
                  </h5>
                  <h5 className="time">
                    Thời gian làm việc: <br />
                    <span>
                      Cả tuần. Từ 9:00 am - 10:00 pm.
                      <br /> Nghỉ ngày lễ, Tết
                    </span>
                  </h5>
                </div>
                <div className="col-md-3 col-xs-12 support">
                  <h4 className="title-support">Hỗ trợ khách hàng</h4>
                  <ul className="support-list">
                    <li>
                      <Link className="link-support" to="/">
                        Câu hỏi thường gặp
                      </Link>
                    </li>
                    <li>
                      <Link className="link-support" to="/">
                        Phương thức thanh toán
                      </Link>
                    </li>
                    <li>
                      <Link className="link-support" to="/">
                        Phương thức vận chuyển
                      </Link>
                    </li>
                    <li>
                      <Link className="link-support" to="/">
                        Hướng dẫn mua hàng &amp; đổi trả
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-xs-12 quick">
                  <h4 className="title-quick">Liên kết nhanh</h4>
                  <ul className="quick-list">
                    <li>
                      <Link className="quick-link" to="/">
                        Trang Chủ
                      </Link>
                    </li>
                    <li>
                      <Link className="quick-link" to="/about">
                        Về ZIGToys
                      </Link>
                    </li>
                    <li>
                      <Link className="quick-link" to="/products">
                        Sản Phẩm
                      </Link>
                    </li>
                    <li>
                      <Link className="quick-link" to="/blog">
                        Zig Blog
                      </Link>
                    </li>
                  </ul>
                  <SocialLink />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <hr className="divider" />
              <div className="row">
                <div className="col-md-12 text-center">
                  <h6 className="copyright">
                    Copyright©2020 by MinhTran. All Rights Reserved.
                  </h6>
                </div>
              </div>
            </div>
          </footer>
        </Row>
      </Container>
    );
  }
}

export default Footer;
