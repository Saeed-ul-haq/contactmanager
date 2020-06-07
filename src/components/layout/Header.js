import React from 'react'
import propTypes from 'prop-types';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faQuestion,faHome } from '@fortawesome/free-solid-svg-icons';

 const Header = (props) => {
     const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><FontAwesomeIcon icon = {faHome} /> HOME </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link"> <FontAwesomeIcon icon={faPlus} /> Add Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link"><FontAwesomeIcon icon={faQuestion} /> About</Link>
                    </li>
                </ul>
            </div>


        </nav>
    );
};

Header.defaultProps = {
    branding: 'MyApp'
};

Header.propTypes = {
    branding: propTypes.string.isRequired
}

export default Header;
