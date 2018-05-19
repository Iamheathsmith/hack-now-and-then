import React from 'react';
import './modal.scss';

class Modal extends React.Component {

  render() {
    return (
      <div className="invis">
        <section className="modal">
          <input type="text" className="name" placeholder="User Name" />
          <input type="text" className="password" placeholder="Password" />
          <div className="btns">
            <button className="btn" onClick={this.props.reset}>Sign in</button>
            <button className="btn" onClick={this.props.reset}>Sign Up</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;
