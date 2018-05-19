import React from 'react';
import * as routes from '../routes';
import {Link} from 'react-router-dom';
import './nav.scss';

class Nav extends React.Component {

  render() {
    return (
      <div className="nav">
        <Link to={routes.CONTENT} className="home">Home</Link>
        <Link to={routes.PROFILE} className="profile">Profile</Link>
      </div>
    );
  }
}


export default Nav;
