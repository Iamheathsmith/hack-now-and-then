import React from 'react';
import Nav from '../nav/index';
// import './input-area.scss';

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
      <div className="exerciseBreakout" >
        <header className="header">
          <h1 className="logo">WORK IT OUT!</h1>
          <div className="navBar">
            <Nav />
          </div>
        </header>
        <div className="exerciseName">
          <div className="exerciseIcon">
            <img src="" />
          </div>
          <div className="exercise">
            <h1>{this.props.location.state.name}</h1>
          </div>
        </div>

        <div className="steps">
          <h1>Video</h1>
          <iframe src={this.props.location.state.video}></iframe>
        </div>

        <div className="leaderboard">
          <ul>
            <li>{this.props.location.state.leaderBoard[0]}</li>
            <li>{this.props.location.state.leaderBoard[1]}</li>
            <li>{this.props.location.state.leaderBoard[2]}</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default exerciseBreakout;
