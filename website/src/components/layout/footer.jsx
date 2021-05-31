// import { Link } from "gatsby"
import React from "react"
import '../../scss/main.scss'

const Footer = ({ siteTitle }) => (
  <footer className="footer-main">
    <div className="footer-copyright">
      <span>
        {siteTitle} © {new Date().getFullYear()}, 
        Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby </a>
      </span>
      <br></br>
    </div>
  </footer>
)

export default Footer;