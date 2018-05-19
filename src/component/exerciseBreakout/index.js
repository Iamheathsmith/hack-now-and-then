import React from 'react';
// import './input-area.scss';

class exerciseBreakout extends React.Component {

  render() {
    return (
        <div className="exerciseBreakout"
            <div className="exerciseName">
                <div className="exerciseIcon">
                    <img src="" />
                </div>
                <div className="exercise">
                    <h1>Yoga</h1>
                </div>
            </div>

            <div className="steps">
                <h1>Steps</h1>
                <iframe src="www.example.com"></iframe>
            </div>
        
            <div className="leaderboard">
                <ul>
                    <li>David</li>
                    <li>Heath</li>
                    <li>Alan</li>
                </ul>
            </div>
        </div>
    );
  }
}


export default exerciseBreakout;
