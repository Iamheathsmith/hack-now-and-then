import React from 'react';
import './image.scss';
import pic from '../../images/latpulls.jpg';

class ExImages extends React.Component {

  render() {
    return (
      <div className="div-img">
        <img src={pic} className="main-img"></img>
      </div>
    );
  }
}

export default ExImages;
