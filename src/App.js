import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo,faStar } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

import './App.css';
import './menu.css';
import './header.css';
import './skills.css';
// import '.css/abilities.css';
import './aboutme.css';
import './education.css';
import './contact.css';
import './footer.css';
// import './frontenddev.css';
import './projects.css';
import './work.css';


import Menu from './Menu';
import Header from './Header';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Education from './Education';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';
import Work from './Work';
import scrollToComponent from 'react-scroll-to-component';





// library.add(faIgloo)
// library.add(faStar)
class App extends Component {
  // componentDidMount() {
  //   this.scrollBy(0,100);
  // }

  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  render() {
    return (
     <>
      <Menu onMenuClick={this.onMenuClick}/>
      <Header ref = 'home'/>
      <AboutMe ref = 'aboutme'/>
      <Projects ref = 'projects'/>
      <Skills ref = 'skills'/>
      <Work ref = 'work'/>
      <Education ref = 'education' />
      <Contact ref = 'contact'/>
      <Footer />
     </>
    );
  }

  onMenuClick(path) {
    this.refs[path] && scrollToComponent(this.refs[path], {
      align: 'top'
    })
  }
}

export default App;
