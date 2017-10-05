import React, { Component } from 'react';
import logo from '../../logo.png';

// Stylesheet
import '../../css/components/Nav.css';

export default class Nav extends Component {
	render() {
		return(
		  <nav id="nav" className="navbar navbar-default navbar-fixed-top">
		    <div className="container-fluid">
		      <div className="navbar-header">
		        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		          <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i>
		        </button>
		        <a className="navbar-brand page-scroll" href="/">
		          <img src={logo} alt="bellevue-farmers-market" className="logo" height="50" width="50" />
		        </a>
		      </div>
		      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		        <ul className="nav navbar-nav navbar-right">
		          <li><a className="nav-text" href="/">The Market</a></li>
		          <li><a className="nav-text" href="/vendors">Vendors</a></li>
		          <li className="dropdown dropdown-extra">
		            <a className="nav-text dropdown-toggle" data-toggle="dropdown" href="/involved">Get Involved</a>
		            <ul className="dropdown-menu">
		              <li><a href="/vendor-application" className="nav-text">Be A Vendor</a></li>
		              <li><a href="/sponsorship" className="nav-text">Sponsorship</a></li>
		              <li><a href="/volunteer" className="nav-text">Volunteer</a></li>
		              <li><a href="/musicians" className="nav-text">Musicians</a></li>
		              <li><a href="/non-profit" className="nav-text">Non-Profit</a></li>
		              <li><a href="/pop" className="nav-text">Power of Produce</a></li>
		            </ul>
		          </li>
		          <li className="dropdown dropdown-extra">
		            <a className="nav-text dropdown-toggle" data-toggle="dropdown" href="/resources">Resources</a>
		            <ul className="dropdown-menu">
		              <li><a href="/expect" className="nav-text">What to Expect</a></li>
		              <li><a href="/payments" className="nav-text">Snap, WIC, Fresh Bucks</a></li>
		              <li><a href="/payment-options" className="nav-text">Payment Options</a></li>
		              <li><a href="/2016" className="nav-text">2016 Impact Statement</a></li>
		            </ul>
		          </li>
		          <li className="dropdown dropdown-extra">
		            <a className="nav-text dropdown-toggle" data-toggle="dropdown" href="/about">About Us</a>
		            <ul className="dropdown-menu">
		              <li><a href="/mission" className="nav-text">Mission</a></li>
		              <li><a href="/staff" className="nav-text">Staff & Board</a></li>
		              <li><a href="/employment" className="nav-text">Employment</a></li>
		              <li><a href="/contact" className="nav-text">Contact</a></li>
		            </ul>
		          </li>
		          <li><a className="nav-text" href="/blog">Blog</a></li>
		          <li><a className="nav-text" href="/donate">Donate</a></li>
		          <li><a className="nav-text" href="#contact">Find Us</a></li>
		        </ul>
		      </div>
		    </div>
		  </nav>
		)
	}
}