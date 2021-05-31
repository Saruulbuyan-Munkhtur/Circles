import React from "react";
import Header from "./header"
import Footer from "./footer"
// import Sidebar from "./sidebar"
import '../../scss/main.scss'

const Layout = ({children}) => {
    return (
      <div className="body">
          <Header/>
            <main>
              {/* <Sidebar /> */}
              {children}
            </main>
          <Footer/>
      </div>
    )
}

export default Layout