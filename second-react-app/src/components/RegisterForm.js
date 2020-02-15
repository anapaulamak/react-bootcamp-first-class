import React, { Component } from 'react';
import { InputForm } from './InputForm';
import { SubmitButton } from './SubmitButton';

export class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        cidade: '',
        email: '', 
        cpf: '',
        telefone: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value){
    this.setState({ [name]: value });
  }
  
  handleSubmitForm = event => {
    event.preventDefault();
    console.log(this.state)
  };


  render(){
    const labels = [ 
      {
        label: 'Nome Completo',
        name: 'name',
        type: 'text',
      },
      {
        label: 'Cidade',
        name: 'cidade',
        type: 'text',
      },
      {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'email@email.com',
      },
      {
        label: 'Cpf',
        name: 'cpf',
        placeholder: '000.000.000-00',
        mask: "999.999.999-99"
      }, 
      {
        label: 'Telefone',
        name: 'telefone',
        placeholder: '(XX)XXXXX-XXXX',
        mask: "(99)99999-9999"
      }, 
    ]

    return(
      <form onSubmit={this.handleSubmitForm}>
        {labels.map((label, index) => {
          return(
            <InputForm
              label={label.label}
              name={label.name}
              placeholder={label.placeholder}
              onChange={this.handleChange}
              value={this.state[label.name]}
              mask={label.mask}
            />
            )
          })
        }

        <SubmitButton buttonText="Inscrever"/>
      </form>
    )
  }
}