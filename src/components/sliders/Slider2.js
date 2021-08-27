import React, { Component } from "react";
import "./sliders.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../../images/1.svg";
import s2 from "../../images/2.svg";
import s3 from "../../images/3.svg";
import s4 from "../../images/4.svg";
import s5 from "../../images/5.svg";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
class Services extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <>
       
        {/* slider start here */}
        <div className="MAIN_SLIDER">
        
        <Slider {...settings}>
          <div>
            <div className="all_services_box2">
              <img className="ALL_SERVICES_imgs" src={s1} alt="" />
              <h3>EPR Services for Producers & Bulk Consumers</h3>
                      <p>
                      Reach your yearly e-waste collection targets and get EPR authorization by associating with us.
                      </p>
            </div>
            {/* <img className="slider_images" src={p6} alt=""/> */}
          </div>
          <div>
            <div className="all_services_box2">
              <img className="ALL_SERVICES_imgs" src={s2} alt="" />
              <h3>E-Secure Data Destruction Services</h3>
                      <p>
                      Don’t worry about data leakage. We safely remove the entire data in the storage devices and then dismantle all the components for recycling.
                      </p>
            </div>
          </div>
          <div>
            <div className="all_services_box2">
              <img className="ALL_SERVICES_imgs" src={s5} alt="" />
              <h3>IT Asset Management</h3>
                      <p>
                      Maintaining End of Life IT hardware is very expensive. We monitor the old IT assets and help you upgrade in the right time with less investment.
                      </p>
            </div>
          </div>
          <div>
            <div className="all_services_box2">
              <img className="ALL_SERVICES_imgs" src={s3} alt="" />
              <h3>IT Asset Disposal</h3>
                      <p>
                      Disposing of End of Life or old IT Hardware can bring great returns for you.
                      </p>
            </div>
          </div>
          <div>
            <div className="all_services_box2">
              <img className="ALL_SERVICES_imgs" src={s5} alt="" />
              <h3>Reverse Logistics</h3>
                      <p>
                      We collect and transport huge accumulations of carton damaged, customer returned, or end of life products from your location.
                      </p>
            </div>
          </div>
          <div>
            <div className="all_services_box2">
              <img className="ALL_SERVICES_imgs" src={s4} alt="" />
              <h3>PCB Certified E-Waste Recycling</h3>
                      <p>
                      We do have a PCB Authorized recycling unit in Bangalore with the facility to extract precious materials.
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
