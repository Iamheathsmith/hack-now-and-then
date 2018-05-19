import React from 'react';
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
    console.log('this state', this.props.location.state);
    return (
      <div className="exerciseBreakout" >
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
