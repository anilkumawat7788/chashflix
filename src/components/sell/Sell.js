import React from 'react'
import "./sell.css"
import sell from "../../images/phones/sell.svg";
import { NavLink } from "react-router-dom";
const Sell = () => {
    return (
        <>
       <div className="main_about_page_layout">
        <div className="main_about_section">
          <div className="about_heading_content">
            <h1>Sell Phone</h1>
            <h4>
            Sell your Mobile Phone  <br />
            for instant cash
            </h4>
         
          </div>
          <div className="about_img_content">
            <img src={sell} alt="" />
          </div>
        </div>
      </div>
        </>
    )
}
export default Sell;