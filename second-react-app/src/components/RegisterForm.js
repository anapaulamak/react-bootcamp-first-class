import React, { Component } from 'react';
import { InputForm } from './InputForm';
import { SubmitButton } from './SubmitButton';

export class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(inputValue){
    this.setState({
      inputValue: inputValue
    })
  }

  render(){
    const labels = [ 
      {
        name: 'nome completo',
        type: 'text',
      },
      {
        name: 'cidade',
        type: 'text', 
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'email@email.com'
      },
      {
        name: 'cpf',
        type: 'number',
        placeholder: '000.000.000-00'
      }, 
      {
        name: 'telefone',
        type: 'number',
        placeholder: '(XX)XXXXX-XXXX'
      }, 
    ]
    console.log(this.state.inputValue);
    return(
      <form>

        {labels.map((label, index) => {
          return(
            <InputForm 
              name={label.name}
              type={label.type}
              placeholder={label.placeholder}
              onChange={this.handleChange}
            />
            )
          })
        }

        <SubmitButton buttonText="Inscrever" onClick={this}/>
      </form>
    )
  }
}