import React from 'react';
import './image.scss';
import * as routes from '../routes';
import { Link } from 'react-router-dom';
import ExerciseBO from '../exerciseBreakout/index';

class ExImages extends React.Component {

  render() {
    return (
      <div className="div-img">
        <img src={this.props.data.img} className={this.props.stuff ? 'day-item' :'main-img'}></img>
        <div className="to-link"><Link to={{
          pathname:routes.EXERCISEBO,
          state: this.props.data,
        }}>{this.props.data.name}</Link>
        </div>
      </div>
    );
  }
}

export default ExImages;
