
import './content.scss';
import React from 'react';
import Modal from '../modal/index';
import * as routes from '../routes';
import Images from '../images/index';
import NavBar from '../nav/index';
const ImgData = require('../../images/images');
import {Link} from 'react-router-dom';
import Profile from '../profile/index';
import { renderIf } from '../lib/utils';
import Pic from '../../images/latpulls.jpg';
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
        <header>Tic Tac Toe?</header>

        <Nav />


        {renderIf(this.state.login === false,
          <Modal
            reset={this.handlelogIn}
          />
        )}

        <div className="images">
          {renderIf(this.state.login === true,
            ImgData.default.images.map((item, idx) => {
              console.log('test');
              return <Images key={idx}
                data={item}
              />;
            })
          )}
        </div>

      </div>
    );
  }
}

export default Content;
