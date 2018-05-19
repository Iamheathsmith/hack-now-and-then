import React from 'react';
import Nav from '../nav/index';
import './breakout.scss';

class exerciseBreakout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      url: [],
    };
  }

  render() {
    return (
      <div className="exerciseBreakout">
        <Nav />
        <div className="exerciseName">
          <ul class="exUL">
            <h1 class="title">Exercise</h1>
            <li class="exLI">
              <div className="exerciseContent">
                <div className="exerciseIcon">
                  <img src={this.props.location.state.img} />
                </div>
                <div className="exercise">
                  <h1>{this.props.location.state.name}</h1>
                </div>
              </div>
            </li>
            <li class="exLI">
              <div className="leaderboard">
                <h1>Leaderboard</h1>
                <ul className="leaderboardContent">
                  <li>#1: {this.props.location.state.leaderBoard[0]}</li>
                  <li>#2: {this.props.location.state.leaderBoard[1]}</li>
                  <li>#3: {this.props.location.state.leaderBoard[2]}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>


        <div className="steps">
          <h1>How To:</h1>
          <iframe width="840" height="472.5" src="https://www.youtube.com/embed/dzYvUgpqB8s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}


export default exerciseBreakout;
