import React from 'react';
import './main.css';
import Modal from './components/Modal/modal';

class App extends React.Component {
  state = {
    show: false
  };

  showModal = x => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>Hello <span className="orange">Morningtrain</span>!</h1>
          <h2>Frontend design challenge: Case #1</h2>
        </div>
        <div className="button-container">
          <button className="toggle-button" onClick={x => {
            this.showModal(x);
          }}>Show yourself Modal!</button>
        </div>
        <Modal onClose={this.showModal} show={this.state.show} title="Test modal">Bacon ipsum dolor amet pork chop ball tip frankfurter salami biltong. Meatloaf shankle capicola tail doner ribeye swine tenderloin t-bone pork chop burgdoggen biltong prosciutto frankfurter. Frankfurter andouille meatloaf spare ribs. Pastrami filet mignon pork belly picanha ball tip beef.</Modal>
        <Modal onClose={this.showModal} show={this.state.show} title="Test modal 2">I am a different modal</Modal>
      </div>
    );
  }
}

export default App;
