import React, { Component } from 'react';
import Form from  './Form'

class Header extends Component{

  render(){
    return(
      <div className="card-header">
        <h1 className="text-center">Lista de Compras</h1>
        <Form onAdd={this.props.add}/>
      </div>
    );
  }
}

export default Header;
