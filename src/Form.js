import React from "react";

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            lista: ""
          }
          this.inputChange = this.inputChange.bind(this)      
          this.formSubmit = this.formSubmit.bind(this)
    }
  
  inputChange(e) {
    this.setState({
      lista: e.target.value
    });
  };
  formSubmit (e) {
    e.preventDefault();
    (this.state.lista === "") ? alert("Insira um item")
      : this.props.onAdd(this.state.lista);
    this.setState({
      lista: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <input
            type="text"
            placeholder="insira aqui"
            value={this.state.lista}
            onChange={this.inputChange}
          />
        </div>
        <div>
            <button>Adicionar</button>
        </div>
      </form>
    );
  }
}
