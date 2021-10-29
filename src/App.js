
import './App.css';
import Player from './Player';
import Header from './Header';
import React from 'react';
import AddPlayerForm from './AddPlayerForm';  


class App extends React.Component {

  state = {
    players: [
      {
        name: "Rob",
        score: 0,
        id: 1 
       },
       {
        name: "Bob",
        score: 0,
        id: 2
       },
       {
        name: "Blob",
        score: 0,
        id: 3
       },
       {
        name: "Pakrila",
        score: 0,
        id: 4
       },
       {
        name: "Mudila",
        score: 0,
        id: 5
       }
    ]
  };


    // player id counter
    prevPlayerId = 5;

    handleScoreChange = (index, delta) => {
      this.setState( prevState => {
        // New 'players' array – a copy of the previous `players` state
        const updatedPlayers = [ ...prevState.players ];
        // A copy of the player object we're targeting
        const updatedPlayer = { ...updatedPlayers[index] };
        // Update the target player's score
        updatedPlayer.score += delta;
        // Update the 'players' array with the target player's latest score
        updatedPlayers[index] = updatedPlayer
        // Update the `players` state without mutating the original state
        return {
          players: updatedPlayers
        };
      });
    }
    
    // handleScoreChange = ( index, delta) => {
    //   console.log("index: "+index, "delta: " +delta)
    // this.setState( prevState => ({
    //   score: prevState.players[index].score += delta
    // }));
    // }








    handleAddPlayer = (name) => {
      this.setState({
        players: [
          ...this.state.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      });
    }

  handleRemovePlayer = (id) => {
    this.setState(prevState =>{
      return {
      players: prevState.players.filter( p => p.id !== id )
      };
    });
  }

  render(){
    return (
      <div className="scoreboard">
      <Header 
      title="Scoreboard" 
      players={this.state.players}
      />
    {this.state.players.map( (player, index) =>
      <Player 
      score={player.score}
       name={player.name}
       id={player.id}
       key={player.id.toString()}
       changeScore={this.handleScoreChange}
       removePlayer={this.handleRemovePlayer}
       index={index}
      />
    )}
    <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>  
    );
  }
 
}

export default App;
