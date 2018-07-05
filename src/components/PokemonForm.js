import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  // handleChangeName = (event) => {
  //   this.setState ({
  //     name: event.target.value
  //   })
  // }
  //
  // handleChangeHp = (event) => {
  //   this.setState ({
  //     hp: event.target.value
  //   })
  // }
  //
  // handleChangeFrontUrl = (event) => {
  //   this.setState ({
  //     frontUrl: event.target.value
  //   })
  // }
  //
  // handleChangeBackUrl = (event) => {
  //   this.setState ({
  //     backUrl: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   console.log('name', this.state.name);
  //   console.log('hp', this.state.hp);
  //   console.log('front url', this.state.frontUrl);
  //   console.log('back url', this.state.backUrl);
  // }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.handleSubmitForForm}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.props.handleChangeName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.props.handleChangeHp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.props.handleChangeFrontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.props.handleChangeBackUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
