import React from "react";
import Lista from './Lista'
import Topo from './Topo'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      texto: []
    };
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ input: event.target.value });
  }
  add(i) {
    this.state.texto.push({
      titulo: i,
      input: "",
      id: Math.random().toString(36).substr(2, 9),
      criarData: new Date().toLocaleDateString("pt-BR")
    });
    this.setState (this.state);
  }
  delete(index) {
    this.state.texto.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="App">
        <Topo add = {i => {this.add(i)}} />
        <div>
          {this.state.texto.map((i, index) => {
            return <Lista
                key={i.id}
                numero = {index + 1}    
                titulo = {i.titulo}
                criarData = {i.criarData}
                remover = {() => {this.delete(index)}}/>
          })
          }
          </div>
      </div>
    );
  }
}
