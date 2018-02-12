import React from 'react'

import Link from './components/Link'
import Menus from './Menus'
import About from './About'
import Contact from './Contact'

class Home extends React.Component {
   render() {
      return (
      <div className="container-fluid">
        <nav className="top-nav align-right">
          <Menus />
        </nav>
        <div className="parent">
          <div className="image" />
          <div className="matrix-text">Maturity Matrix</div>
        </div>
        <div className="newSection" id="about">
          <About />
        </div>
        <div className="newSection" id="contact">
          <Contact />
        </div>
      </div>
      );
   }
}
export default Home;
