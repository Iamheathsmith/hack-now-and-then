import React from 'react';
import Nav from '../nav/index';
// import './input-area.scss';

class Profile extends React.Component {

  render() {
    return (
      <div className="profile">

        <nav className="nav">
          <Nav />
        </nav>

        <div className="top-holder">
          <div className="img">
            <img>
            </img>
          </div>
          <div className="proInfo">
            <ul>
              <li>Name: David Adil</li>
              <li>Department: Project Management</li>
              <li>Favorite Exercise: Yoga</li>
              <li>Rival: Alan</li>
            </ul>
          </div>
        </div>

        <div className="saying">
          <h1>Mr. Poopy Butthole is the greatest person ever!</h1>
        </div>

        <div className="stats">
          <ul>
            <li>Yoga: 50</li>
            <li>Basketball: 200</li>
            <li>Underwater Basket Weaving: 1298</li>
          </ul>
        </div>

      </div>
    );
  }
}


export default Profile;
