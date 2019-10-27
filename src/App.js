import React from 'react';
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
        <p>Hello World</p>
        <button onClick={x => {
          this.showModal(x);
        }}>Show yourself Modal!</button>
        <Modal onClose={this.showModal} show={this.state.show}>Modal message</Modal>
      </div>
    );
  }
}

export default App;
