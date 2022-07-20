import React, { Component } from "react";
import "./app.css";
import fruta from "./img/cesto.png";

//Crie um component de class
// Crie uma arrow function que receba uma
//_mensagem e exiba na tela
// Crie uma arrow function que retorne
//_o dobro de um número e exiba na tela

export default class App extends Component {
  state = {
    fruta: "MAÇA",
    quantidade: 4,
    cesto: fruta
  };

  area = () => {
    return <p>Ficaram {this.state.quantidade * 2}</p>;
  };

  render() {
    return (
      <>
        <h1>Adicionei o dobro de {this.state.fruta} no cesto</h1>
        <h3>Tinha {this.state.quantidade}</h3>
        <p>{this.area()}</p>
        <img src={this.state.cesto} alt="cesto" />
      </>
    );
  }
}
