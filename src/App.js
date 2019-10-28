import React from 'react';
import './main.css';
import Modal from './components/Modal/modal';
import Leaves from './assets/leaves.jpg'

class App extends React.Component {
  state = {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false
  };

  showModal = (modal) => (e) => {
    this.setState({
      [modal]: !this.state[modal]
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
          <button className="toggle-button" onClick={this.showModal('show1')}>Show yourself Modal 1!</button>
          <button className="toggle-button" onClick={this.showModal('show2')}>Show yourself Modal 2!</button>
          <button className="toggle-button" onClick={this.showModal('show3')}>Show yourself Modal 3!</button>
          <button className="toggle-button" onClick={this.showModal('show4')}>Show yourself Modal 4!</button>
          <button className="toggle-button" onClick={this.showModal('show5')}>Show yourself Modal 5!</button>
          <button className="toggle-button" onClick={this.showModal('show6')}>Show yourself Modal 6!</button>
        </div>
        <Modal onClose={this.showModal('show1')} show={this.state.show1} title="Test modal 1" id="1">Bacon ipsum dolor amet pork chop ball tip frankfurter salami biltong. Meatloaf shankle capicola tail doner ribeye swine tenderloin t-bone pork chop burgdoggen biltong prosciutto frankfurter. Frankfurter andouille meatloaf spare ribs. Pastrami filet mignon pork belly picanha ball tip beef.</Modal>
        <Modal onClose={this.showModal('show2')} show={this.state.show2} title="Test modal 2" id="2"><img src={Leaves} alt=""/></Modal>
        <Modal onClose={this.showModal('show3')} show={this.state.show3} title="Test modal 3" id="3">Number 3</Modal>
        <Modal onClose={this.showModal('show4')} show={this.state.show4} title="Test modal 4" id="4">Number 4</Modal>
        <Modal onClose={this.showModal('show5')} show={this.state.show5} title="Test modal 5" id="5">Number 5</Modal>
        <Modal onClose={this.showModal('show6')} show={this.state.show6} title="Test modal 6" id="6">Number 6</Modal>
      </div>
    );
  }
}

export default App;
