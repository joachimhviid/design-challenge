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
        <h1>Hello World</h1>
        <button onClick={x => {
          this.showModal(x);
        }}>Show yourself Modal!</button>
        <Modal onClose={this.showModal} show={this.state.show} title="Test modal">Modal message</Modal>
      </div>
    );
  }
}

export default App;
