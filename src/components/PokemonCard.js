import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  handleClick = (event) => {
    if (this.state.clicked == false) {
      this.setState ({
        clicked: true
      })
    } else {
      this.setState ({
        clicked: false
      })
    }
  }

  render() {

    return (
      <React.Fragment>
        <Card key={this.props.id} id={this.props.id}>
          <div>
            <div className="image" id={this.props.id} onClick={this.handleClick}>
                {this.state.clicked == false ? <img src={this.props.img} /> : <img src={this.props.backImg}/>}
            </div>
            <div className="content">
              <div className="header">{this.props.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {this.props.hp} hp
              </span>
            </div>
          </div>
        </Card>
      </React.Fragment>
    )
  }
}

export default PokemonCard
