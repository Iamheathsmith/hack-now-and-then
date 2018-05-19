
import './content.scss';
import React from 'react';
import Modal from '../modal/index';
import Images from '../images/index';
// import {Link} from 'react-router-dom';
import Profile from '../profile/index';
import { renderIf } from '../lib/utils';
import DisplayBox from '../displayBox/index';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this.handlelogIn = this.handlelogIn.bind(this);
  }

  handlelogIn() {
    this.setState({login: true});
  }

  render() {
    return (
      <div className="main">
        <header>Tic Tac Toe?</header>

        {/* <nav className="nav-bar">
          <div className="links-to-site">
            <Link className="signup" to={routes.SIGNUP}>Sign Up</Link>
            <Link className="signin" to={routes.SIGNIN}>Sign In</Link>
          </div>
        </nav> */}

        <Profile />
        <Images />

        {renderIf(this.state.login === false,
          <Modal
            reset={this.handlelogIn}
          />
        )}

        {/* <div className="boxes">
          {this.state.array.map((item, arr) => {
            return item.map((item, idx) => {
              return <DisplayBox key={idx}
                boxLocation={{arr,idx}}
                value={this.state.array[arr][idx]}
                onPicking={this.handleSubmit}
                boardSize={this.state.size}
              />;
            });
          })
          }
        </div> */}

      </div>
    );
  }
}

export default Content;
