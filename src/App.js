import React from 'react';
import './main.css';
import Modal from './components/Modal/modal';

//images
import PlantDirt from './assets/plant-dirt.jpg';
import Bonsai from './assets/bonsai.jpg';
import Bird from './assets/bird-flower.jpg';
import Glass from './assets/glass-eco.jpg';
import Bulb from './assets/lightbulb-plant.jpg';
import PotPlant from './assets/potted-plant.jpg';

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
          <h2>Frontend design challenge: <span className="orange">Case #1</span></h2>
        </div>
        <div className="button-container">
          <button className="toggle-button" id="dirt" onClick={this.showModal('show1')}>Table plant</button>
          <button className="toggle-button" id="bonsai" onClick={this.showModal('show2')}>Bonsai tree</button>
          <button className="toggle-button" id="bird" onClick={this.showModal('show3')}>Bird on flower</button>
          <button className="toggle-button" id="glass" onClick={this.showModal('show4')}>Glass ecosystem</button>
          <button className="toggle-button" id="bulb" onClick={this.showModal('show5')}>Lightbulb sprout</button>
          <button className="toggle-button" id="potted" onClick={this.showModal('show6')}>Potted plant</button>
        </div>
        <Modal onClose={this.showModal('show1')} show={this.state.show1} title="Table plant" id="1"><p>Small sprout planted in dirt on a table.</p><img src={PlantDirt} alt=""/></Modal>
        <Modal onClose={this.showModal('show2')} show={this.state.show2} title="Bonsai tree" id="2"><p>A small bonsai tree.</p><img src={Bonsai} alt=""/></Modal>
        <Modal onClose={this.showModal('show3')} show={this.state.show3} title="Bird on flower" id="3"><p>A red bird resting on a red flower.</p><img src={Bird} alt=""/></Modal>
        <Modal onClose={this.showModal('show4')} show={this.state.show4} title="Glass ecosystem" id="4"><p>Ecosystem in a bottle.</p><img src={Glass} alt=""/></Modal>
        <Modal onClose={this.showModal('show5')} show={this.state.show5} title="Lightbulb sprout" id="5"><p>A seed sprouting inside a lightbulb.</p><img src={Bulb} alt=""/></Modal>
        <Modal onClose={this.showModal('show6')} show={this.state.show6} title="Potted plant" id="6"><p>A simple potted plant.</p><img src={PotPlant} alt=""/></Modal>
        <div className="container">
          <p className="small-text">Made by Joachim Hviid</p>
        </div>
      </div>
    );
  }
}

export default App;
