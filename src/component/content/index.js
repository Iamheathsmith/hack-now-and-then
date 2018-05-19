
import './content.scss';
import React from 'react';
import Modal from '../modal/index';
import * as routes from '../routes';
import Images from '../images/index';
import NavBar from '../nav/index';
const ImgData = require('../../imgObj/images');
import {Link} from 'react-router-dom';
import Profile from '../profile/index';
import { renderIf } from '../lib/utils';
// import Pic from '../../images/img';
import ExerciseBO from '../exerciseBreakout/index';
import Nav from '../nav/index';


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
    this.handlelogIn = this.handlelogIn.bind(this);
  }

  componentDidMount() {
    let test = localStorage.getItem('login');
    if (test === 'yes') {
      this.setState({login: true});
    }
  }

  handlelogIn() {
    this.setState({login: true});
    localStorage.setItem('login', 'yes');
  }

  render() {
    return (
      <div className="main">
        <Nav />


        {renderIf(this.state.login === false,
          <Modal
            reset={this.handlelogIn}
          />
        )}

        <section className="image-holder">
          <React.Fragment>
            {renderIf(this.state.login === true,
              ImgData.default.images.map((item, idx) => {
                console.log('test');
                return <Images key={idx}
                  data={item}
                />;
              })
            )}
          </React.Fragment>
        </section>

        <section className="lower-holder">
          <div className="lower-left">
            <h1>exercise of the day: {ImgData.default.images[0].name}</h1>
            <Images
              stuff="day-item"
              data={ImgData.default.images[0]}
            />
          </div>
          <div className="lower-right">
            <h1 className="leaderboard">leaderboard</h1>
            <div className="rankings">
              <ul>
                <li className="rank">Rank</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
              <ul>
                <li className="rank">Name</li>
                <li>Time</li>
                <li>Jill</li>
                <li>Chad</li>
                <li>Lilly</li>
                <li>Clink</li>
              </ul>
              <ul>
                <li className="rank">Score</li>
                <li>145</li>
                <li>126</li>
                <li>111</li>
                <li>109</li>
                <li>98</li></ul>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Content;
