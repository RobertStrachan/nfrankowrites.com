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
                    <div className="button navbar-burger burger" onClick={this.toggleNav} data-target="navbarExampleTransparentExample" >
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
                <Link className="navbar-link" to="/books/">
                    Books
                </Link>
                <div className="navbar-dropdown is-boxed">
                    <a className="navbar-item" href="/documentation/overview/start/">
                    Romantic Comedy of Errors
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Technically Scripted
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Technically Married
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Layout
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                    Form
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                    Elements
                    </a>
                    <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                    Components
                    </a>
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