import React from "react";
import { PiInstagramLogo, PiYoutubeLogoFill } from "react-icons/pi";
import { LiaFacebookF } from "react-icons/lia";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LiaCopyrightSolid } from "react-icons/lia";

import "./footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="topFooterHr"></div>
      <div className="footerTop">
        <div className="borderLeftFooter"></div>
        <div className="borderRightFooter"></div>
        <div className="f-t-Content">
          <div className="footerTopLeft">
            <h3 className="f-t-H3">Follow Mind Africa</h3>
            <div className="f-t-l-Icon">
              <PiInstagramLogo
                size={20}
                color="#00102c"
                className="f-t-IconItem"
              />
              <PiYoutubeLogoFill
                size={20}
                color="#00102c"
                className="f-t-IconItem"
              />
              <LiaFacebookF
                size={20}
                color="#00102c"
                className="f-t-IconItem"
              />
              <FaSquareXTwitter
                size={20}
                color="#00102c"
                className="f-t-IconItem"
              />
            </div>
          </div>
          <div className="footerTopRight">
            <div className="f-t-r-forum">
              <h3 className="f-t-H3">Forum</h3>
              <p className="f-t-Ptag">
                Currently serving in the Mind Africa or Royal Marines? Or have a
                friend or loved one who is?
              </p>
              <p className="f-t-Ptag">
                Sign up to the Mind Africa Forum today and take part in our
                online community.
              </p>
              <div className="f-t-r-f-access">
                <b>Register now</b>
                <div className="accessDevider">|</div>
                <b>Login</b>
              </div>
            </div>
            <div className="f-t-r-contact">
              <h3 className="f-t-H3">Contact</h3>
              <p className="f-t-Ptag">
                Find the contacts you need for recruitment, media enquiries and
                more.
              </p>
              <div className="f-t-r-f-contact">
                <b>Contact us</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="borderLeftFooterBottom"></div>
        <div className="borderRightFooterBottom"></div>
        <div className="f-b-content">
          <h3 className="f-b-H3">Useful Links</h3>
          <div className="topFooterLink">
            <b className="f-b-link">International Defence Training</b>
            <b className="f-b-link">Media Centre</b>
            <b className="f-b-link">Resources & Information</b>
          </div>
          <hr />
          <div className="topFooterLink">
            <b className="f-b-link">© Crown copyright</b>
            <b className="f-b-link">Accessibility</b>
            <b className="f-b-link">Privacy</b>
            <b className="f-b-link">Cookies</b>
            <b className="f-b-link">Terms and Conditions</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
