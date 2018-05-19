import React from 'react';
import * as routes from '../routes';
import {Link} from 'react-router-dom';
import './nav.scss';

class Nav extends React.Component {

  render() {
    return (
      <div className="nav">
        <span>Gamigen</span>
        <div className="navStuff">
          <Link to={routes.CONTENT} className="home">Home</Link>
          <Link to={routes.PROFILE} className="profile">Profile</Link>
        </div>
      </div>
    );
  }
}


export default Nav;
