import React, { Component } from 'react';
import './App.css';
import fruit from './melao.png';


class App extends Component{

  state = {
    
    dados: {
        nome: "Felipe",
        idade: 28,
        comida: "Costela com batata",
        musicas: ["O amigo", "Liberta-me de mim", "Nada me separar desse amor"]

      }

  }

  render(){
    return(
        <>
         <h1>Nome: {this.state.dados.nome}</h1>
         <h2>Idade: {this.state.dados.idade} </h2>
         <h3>Comida: {this.state.dados.comida} </h3>
         <h4>Musicas:</h4>
         <ol>  
          <li>{this.state.dados.musicas[0]}</li>
          <li>{this.state.dados.musicas[1]}</li>
          <li>{this.state.dados.musicas[2]}</li>
         </ol>
         
         <img src={fruit} className="App-logo" alt="logo" />
         
        </>
    )
  }
}

export default App;