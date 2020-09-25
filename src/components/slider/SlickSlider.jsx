import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SlickSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slideBanner">
        <Slider {...settings}>
          <div className="slideBanner-item">
            <img
              src="https://velocity5.github.io/zigtoys/images/product_images/ultraz.jpg"
              alt="banner one"
            />
            <form className="slideCaption modify__FirstCaption">
              <h1 className="heading-title">
                Nhận coupon <span> 30% </span> <br />
                cho người đăng ký mới
              </h1>
              <button className="callAction" type="button" id="signupNow">
                Đăng ký ngay
              </button>
            </form>
          </div>
          <div className="slideBanner-item last-item">
            <img
              src="https://velocity5.github.io/zigtoys/images/product_images/banner_1.jpg"
              alt="banner two"
            />
            <form className="slideCaption modify__SecondCaption">
              <h1 className="heading-title">
                Ưu đãi hè lên đến <span> 50% </span> <br />
                khi đặt hàng qua ZIGToys
              </h1>
              <button className="callAction" type="button" id="orderNow">
                Đặt hàng ngay
              </button>
            </form>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider;