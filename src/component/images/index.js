import React from 'react';
import './image.scss';
import * as routes from '../routes';
import { Link } from 'react-router-dom';
import ExerciseBO from '../exerciseBreakout/index';

class ExImages extends React.Component {

  render() {
    return (
      <div className="div-img">
        <img src={this.props.data.img} className="main-img"></img>
        <Link to={{
          pathname:routes.EXERCISEBO,
          state: this.props.data,
        }} >this cool thing</Link>
      </div>
    );
  }
}

export default ExImages;
