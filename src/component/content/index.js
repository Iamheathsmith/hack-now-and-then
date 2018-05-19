
import './content.scss';
import React from 'react';
import Modal from '../modal/index';
// import {Link} from 'react-router-dom';
import Profile from '../profile/index';
import { renderIf } from '../lib/utils';
import DisplayBox from '../displayBox/index';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
    this.handlelogIn = this.handlelogIn.bind(this);
  }

  handlelogIn() {
    this.setState({login: true});
  }

  // handleMode(arr) {
  //   if (arr === 3) {
  //     this.setState({array: [['','',''],['','',''],['','','']],
  //       size: 3, user: true, last: '', next: ''});
  //   }
  //   if (arr === 4) {
  //     this.setState({array: [['','','',''],['','','',''],['','','',''],['','','','']],
  //       size: 4, user: true, last: '', next: ''});
  //   }
  // }

  // handleCpu() {
  //   this.setState({cpu: !this.state.cpu});
  //   this.handleReset();
  // }

  // handleCpuTurn() {
  //   let countUp = this.state.count;
  //   if (countUp === (this.state.size * this.state.size)) return;
  //   let temp = this.state.array;
  //   return Promise.resolve(Bot.nextMove(this.state.array, this.state.count))
  //     .then(nextMove => {
  //       temp[nextMove.i][nextMove.y] = 'O';
  //       this.setState({array: temp, user: true, last: 'O', next: 'X', count: countUp + 1});
  //       this.handleCheckForWinner();
  //     });
  // }

  // handleCheckForWinner() {
  //   let checkGame = Check.checkWinner(this.state.array);
  //   if (checkGame === 'winner') {
  //     this.setState({winner: true});
  //     return;
  //   } else if (this.state.count === (this.state.size * this.state.size)) {
  //     this.setState({stalemate: true});
  //     return;
  //   }
  // }

  // handleSubmit(e) {
  //   let countUp = this.state.count;

  //   if (this.state.user === true) {
  //     let temp = this.state.array;
  //     temp[e.location.arr][e.location.idx] = 'X';
  //     return Promise.resolve(this.setState({array: temp, user: false, last: 'X', next: 'O', count: countUp + 1}))
  //       .then(() => {
  //         this.handleCheckForWinner()
  //         ;})
  //       .then(() => {
  //         if (this.state.cpu === true && this.state.winner === false) {
  //           this.handleCpuTurn();
  //         }
  //       });
  //   }

  //   if (this.state.user === false && this.state.cpu === false){
  //     let temp = this.state.array;
  //     temp[e.location.arr][e.location.idx] = 'O';
  //     this.setState({array: temp, user: true, last: 'O', next: 'X', count: countUp + 1});
  //     this.handleCheckForWinner();
  //     return;
  //   }
  // }

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
