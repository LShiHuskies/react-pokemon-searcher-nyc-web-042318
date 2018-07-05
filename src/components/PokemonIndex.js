import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import SearchBar from './SearchBar'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    pokemonsCopy: [],
    value: "",
    searchBarValue: '',
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
    selectedSort: ''
  }


  componentDidMount() {
    fetch('http://localhost:3000/pokemon').then(resp => resp.json()).then(pokemons => {
      this.setState ({
        pokemons: pokemons,
        pokemonsCopy: pokemons
      })
    })

  }


  handleChange = (event) => {
    this.setState ({
      searchBarValue: event.target.value
    })

    let newPokemonList = this.state.pokemonsCopy.filter(pokemon => {
      return pokemon.name.includes(this.state.searchBarValue)
    })

    this.setState ({
      pokemons: newPokemonList
    })


  }

  handleTheSubmit = (event) => {
    event.preventDefault();

    let newPokemonList = this.state.pokemonsCopy.filter(pokemon => {
      return pokemon.name.includes(this.state.searchBarValue)
    })

    this.setState ({
      pokemons: newPokemonList
    })

  }

  handleChangeName = (event) => {
    this.setState ({
      name: event.target.value
    })
  }

  handleChangeHp = (event) => {
    this.setState ({
      hp: event.target.value
    })
  }

  handleChangeFrontUrl = (event) => {
    this.setState ({
      frontUrl: event.target.value
    })
  }

  handleChangeBackUrl = (event) => {
    this.setState ({
      backUrl: event.target.value
    })
  }


  handleSubmitForForm = (event) => {
    event.preventDefault();
    let thing = this.state.pokemons[140]




    let newPokemonObj = Object.assign({}, thing)


    newPokemonObj.name = this.state.name;
    newPokemonObj.stats[5].value = this.state.hp;
    newPokemonObj.sprites.front = this.state.frontUrl;
    newPokemonObj.sprites.back = this.state.backUrl;

    this.setState ({

      pokemons: [...this.state.pokemons, newPokemonObj],

      pokemonsCopy: [...this.state.pokemonsCopy, newPokemonObj]
    })


  }

  handleSelect = (event) => {
    event.preventDefault();

    this.setState ({
      selectedSort: event.target.value
    })
    if (event.target.value == "Sort By Name") {
      this.sortByName();
    } else if (event.target.value == "Sort By Hp") {
      this.sortByHp();
    }
  }

  sortByName = () => {

    let pokemonThing =  this.state.pokemonsCopy.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else {
        return 1
      }
    })
    this.setState ({
      pokemons: pokemonThing
    })
  }

  sortByHp = () => {
    let pokemonThing = this.state.pokemonsCopy.sort((a, b) => {
      return a.stats[5].value - b.stats[5].value })

  }



  render() {



    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        {/*}<Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />*/}
        <SearchBar searchBarValue={this.state.searchBarValue} handleChange={this.handleChange} handleTheSubmit={this.handleTheSubmit} selectedSort={this.state.selectedSort} handleSelect={this.handleSelect}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemons}/>
        <br />
        <PokemonForm handleSubmitForForm={this.handleSubmitForForm} handleChangeName={this.handleChangeName} handleChangeHp={this.handleChangeHp} handleChangeFrontUrl={this.handleChangeFrontUrl} handleChangeBackUrl={this.handleChangeBackUrl}/>
      </div>
    )
  }
}

export default PokemonPage
