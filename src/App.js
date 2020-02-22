import React, { Component, Fragment } from 'react';
import './App.css';
import BadgeCard from './components/BadgeCard/index';
import Bootstrap from "./components/Bootstrap/index";
import Badges from "./Badges.json";
import footer from './components/Footer/index';
import { render } from 'react-dom';


class App extends Component {
  state = {
    Badges,
    clickedItems: [],
    score: 0,
    clicked: false
  };



  handleIncrement = (event) => {
    
    console.log("inside function")
    this.setState({ score: this.state.score + 1 });
    // this.setState({ clicked: true })
    // if (this.state.clicked == true){
    //   alert("Sorry you lost the game")
    // }
    if (this.state.score === 7) {
      alert("You win! Onwards to the Elite Four!");
      this.setState({ score: 0 })
      
    }
  }


  // handleIncrement = (clickEvent) => {
  //   var clicked = false
  //   this.setState({ score: this.state.score + 1});
  //   for (var i = 0; i < this.state.clickedItems.length; i++) {
  //     if (this.state.clickedItems[i] === clickEvent) {
  //       clicked = true;
  //       if (clicked) {
  //         this.setState.score = 0;
  //       } else {
  //         this.state.clickedItems.push(clickEvent)
  //         this.setState({ score: this.state.score + 1});
  //       }
        
  //     }
  //   }
  // }



  componentDidMount() {

    let newArr = this.state.Badges.sort(function (a, b) { return 0.5 - Math.random() })
    console.log("------")
    console.log(newArr)
    this.setState({
      Badges: newArr
    })
  }

  shuffleFun = () => {
    let newArr = this.state.Badges.sort(function (a, b) { return 0.5 - Math.random() })
    console.log("------")
    console.log(newArr)
    this.setState({
      Badges: newArr
    })
  }


  // set the state to event target

  // clickedBadge = id => {
  //   this.state.clickedItems = [];
  //   const Badges = this.state.Badges.forEach(Badges.id)
  //   this.state.clickedItems.push(Badges.id);
  //   for (let i = 0; i < Badges.length; i++) {
  //     if (this.state.clickedItems[i].id == Badges.id)
  //       alert("Sorry you lost!")
  //   }
  // }



  multiFunc = () => {
    this.shuffleFun();
    this.handleIncrement();
    // this.gameOver();
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="navcontainer">
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Gotta click 'em all!
  </a>
            <p className="yourScore">
              Current Score: {this.state.score}
            </p>
            <p>
            </p>
          </nav>
        </div>
        <Bootstrap
        />
        {this.state.Badges.map(c =>
          <BadgeCard
            image={c.image} key={c.id} onClick={this.multiFunc}
          />
        )}
        <row>
        </row>
        <footer />
      </React.Fragment>
    );
  }
}

export default App;
