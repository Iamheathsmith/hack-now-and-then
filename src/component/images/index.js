import React from 'react';
import './image.scss';
// import pic from '../../images/latpulls.jpg';
import * as routes from '../routes';
import { Link } from 'react-router-dom';
import ExerciseBO from '../exerciseBreakout/index';

class ExImages extends React.Component {

  render() {
    return (
      <div className="div-img">
        <img src={this.props.data} className="main-img"></img>
        <Link to={routes.EXERCISEBO}>this cool thing</Link>
      </div>
    );
  }
}

export default ExImages;
