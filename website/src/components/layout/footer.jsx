// import { Link } from "gatsby"
import React from "react"
import '../../scss/main.scss'

const Footer = ({ siteTitle }) => (
  <footer className="footer-main">
    <div className="footer-copyright">
      <span>
        {siteTitle} © {new Date().getFullYear()}, 
        Built with {` `} Firebase, React, Material UI
      </span>
      <br></br>
    </div>
  </footer>
)

export default Footer;