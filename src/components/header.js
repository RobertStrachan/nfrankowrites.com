import React from 'react'
import Link from 'gatsby-link'
import HeaderImage from '../img/header-large.jpg'
import Img from "gatsby-image"
import fontAwesome from "react-fontawesome"
import Navbar from '../components/navbar.js'


const Header = ({ siteTitle, authorName, authorTag, headerImage }) => (
  <header
    // style={{
    //   background: 'pink',
    //   marginBottom: '1.45rem',
    // }}
  >
    <div
      style={{
        position: 'relative',
      }}
    >  
      {/* <img src={HeaderImage} alt="flowers" 
      /> */}
      <Img  sizes={headerImage.sizes} />
      <div className="header"
        // style={{
        //   margin: '0 auto',
        //   position: 'absolute',
        //   transform: 'translateY(-50%)',
        //   top: '20%',
        //   maxWidth: 960,
        //   padding: '1.45rem 1.0875rem',
        // }}
      >
        <h1 style={{ margin: 0, }}>
          <Link
            to="/"
            // style={{
            //   color: 'pink',
            //   fontSize: '3em',
            //   textDecoration: 'none',
            // }}
          >
             {authorName} 
          </Link>
        </h1>
        <h2>
         {authorTag}
        </h2>
      </div>
    </div>
    {/* <nav className="navbar">
      <div className="navbar-brand">
      
      <ul className="navbar-menu">
      <div className="navbar-start"></div>
      <li className="navbar-item " ><Link to="/">Home</Link></li>
      <li className="navbar-item"><Link to="/books">Books</Link></li>
      <li className="navbar-item"><Link to="/about">About</Link></li>
      <li className="navbar-item"><Link to="/contact">Contact</Link></li>
      <div className="navbar-end "></div>
      </ul>
      </div>
  </nav> */}

  <Navbar />


  </header>

)

export default Header



