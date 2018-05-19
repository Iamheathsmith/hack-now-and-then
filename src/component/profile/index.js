import React from 'react';
import Nav from '../nav/index';
import './profile.scss';
const image = require('../../images/img/profile.JPG');

class Profile extends React.Component {

  render() {
    return (
      <div className="profile">

        <header className="header">
          <h1 className="logo">WORK IT OUT!</h1>
          <div className="navBar">
            <Nav />
          </div>
        </header>

        <div className="top-holder">
          <div className="img">
            <img src={image} className="profile-img"></img>
          </div>
          <div className="proInfo">
            <ul>
              <li>Name: David Adil</li>
              <li>Department: Project Management</li>
              <li>Favorite Exercise: Yoga</li>
              <li>Rival: Alan</li>
            </ul>
          </div>
          <div className="saying">
            <h1>"Mr. Poopy Butthole is the greatest person ever!"</h1>
          </div>

          <div className="stats">
            <h1 className="events">Best events</h1>
            <ul>
              <li>Yoga: 50</li>
              <li>Basketball: 200</li>
              <li>Underwater Basket Weaving: 1298</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}


export default Profile;
