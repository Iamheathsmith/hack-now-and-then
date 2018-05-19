import React from 'react';
import './modal.scss';

class Modal extends React.Component {

  render() {
    return (
      <div className="invis">
        <section className="modal">
          <h1 className="name">Gamigen</h1>
          <input type="text" className="name" placeholder="User Name" />
          <br />
          <input type="text" className="password" placeholder="Password" />
          <br />
          <div className="btns">
            <button className="btn-in" onClick={this.props.reset}>Sign in</button>
            <button className="btn-up" onClick={this.props.reset}>Sign Up</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;
