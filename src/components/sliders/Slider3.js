import React, { Component } from "react";
import "./sliders.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import twitter from "../../assets/twitter.png";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
import s5 from "../../assets/s5.svg";
import s6 from "../../assets/s6.svg";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
class Services extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      autoplay: true,
  autoplaySpeed: 2000,
      speed: 500,
    };
    return (
      <>
        {/* slider start here */}
        <div className="MAIN_SLIDER">
          <Slider {...settings}>
            <div>
              <div className="all_services_box3">
                <img className="ALL_SERVICES_imgs2" src={twitter} alt="" />
                <h3>Mahesh Kumar</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  voluptatibus deleniti vel! Illum veritatis, nam esse ut
                  mollitia quo molestiae!
                </p>
                {/* <img className="ALL_SERVICES_imgs" src={s1} alt="" />
              <h3>EPR Services for Producers & Bulk Consumers</h3>
                      <p>
                      Reach your yearly e-waste collection targets and get EPR authorization by associating with us.
                      </p> */}
              </div>
            </div>
            <div>
              <div className="all_services_box3">
              <img className="ALL_SERVICES_imgs2" src={twitter} alt="" />
                <h3>Naveen P</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  voluptatibus deleniti vel! Illum veritatis, nam esse ut
                  mollitia quo molestiae!
                </p>
              </div>
            </div>
            <div>
              <div className="all_services_box3">
              <img className="ALL_SERVICES_imgs2" src={twitter} alt="" />
                <h3>Akhila P N</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  voluptatibus deleniti vel! Illum veritatis, nam esse ut
                  mollitia quo molestiae!
                </p>
              </div>
            </div>
            <div>
              <div className="all_services_box3">
              <img className="ALL_SERVICES_imgs2" src={twitter} alt="" />
                <h3>Giri Raj k</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  voluptatibus deleniti vel! Illum veritatis, nam esse ut
                  mollitia quo molestiae!
                </p>
              </div>
            </div>
            <div>
              <div className="all_services_box3">
              <img className="ALL_SERVICES_imgs2" src={twitter} alt="" />
                <h3>Sunil Kumar</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  voluptatibus deleniti vel! Illum veritatis, nam esse ut
                  mollitia quo molestiae!
                </p>
              </div>
            </div>
            <div>
              <div className="all_services_box3">
              <img className="ALL_SERVICES_imgs2" src={twitter} alt="" />
                <h3>Mushkan</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  voluptatibus deleniti vel! Illum veritatis, nam esse ut
                  mollitia quo molestiae!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export default Services;
