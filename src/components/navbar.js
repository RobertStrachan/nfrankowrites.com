import React from 'react'
import Link from 'gatsby-link'
import fontAwesome from "react-fontawesome"


class Navbar extends React.Component{

    state = {
        isActive: false,
    }

    toggleNav = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    }

    render() {
        return (


            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        N. Franko
                    </Link>
                    <div className="navbar-burger burger" onClick={this.toggleNav} data-target="navbarExampleTransparentExample" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
    
            <div id="navbarExampleTransparentExample" className={ this.state.isActive ? "navbar-menu is-active" : "navbar-menu"}>
            <div className="navbar-start">
                <Link className="navbar-item" to="/">
                Home
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/romantic-comedy-of-errors/">
                    Books
                </Link>
                <div className="navbar-dropdown is-boxed">
                    <Link className="navbar-item" to="/romantic-comedy-of-errors/">
                    Romantic Comedy of Errors
                    </Link>
                    {/* <Link className="navbar-item" to="/technically-scripted/">
                    Technically Scripted
                    </Link>
                    <Link className="navbar-item" to="/technically-speaking/">
                    Technically Speaking
                    </Link>
                    <Link className="navbar-item" to="/technically-married/">
                    Technically Married
                    </Link> */}
                    <hr className="navbar-divider"/>
                    <Link className="navbar-item" to="/the-runaway/">
                    The Runaway
                    </Link>
                </div>
                </div>
                <Link className="navbar-item" to="/about/">
                About
                </Link>
                <Link className="navbar-item" to="/contact/">
                Contact
                </Link>
            </div>
    
            <div className="navbar-end">
                <div className="navbar-item">
                <div className="field is-grouped">
                    <p className="control">
                    <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                        <span className="icon">
                        <i className="fab fa-twitter"></i>
                        </span>
                        <span>
                        Tweet
                        </span>
                    </a>
                    </p>
                    <p className="control">
                    <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                        <span className="icon">
                        <i className="fas fa-download"></i>
                        </span>
                        <span>Subscribe
                        
                        </span>
                    </a>
                    </p>
                </div>
                </div>
            </div>
            </div>
            </nav>
    
        )
    }
    


} 

export default Navbar