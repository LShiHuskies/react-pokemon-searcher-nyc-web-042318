import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  



  render() {

    let pokemonCards = this.props.pokemon.length > 0 ? this.props.pokemon.map( pokemon => {
      return <PokemonCard id={pokemon.id} img={pokemon.sprites.front} backImg={pokemon.sprites.back} name={pokemon.name}
        hp={pokemon.stats[5].value}/>
    }) : null


    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        <div>
          {/*<PokemonCard pokemonObjs={this.state.pokemons} handleClick={this.handleTheClick} chosenObj={this.state.pokemonObjs}/>*/}
          {pokemonCards}
        </div>
      </Card.Group>
    )
  }
}

export default PokemonCollection
