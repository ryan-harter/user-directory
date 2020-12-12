import React, {Component} from 'react'
import data from '../data'
//import Buttons from './Buttons'
import Person from './Person'
import './card.css'

class Card extends Component{
  constructor(){
    super()
    this.state={
      index: 0,
      people: [...data],
      // name: {},
      // city: '',
      // country: '',
      // employer: '',
      // jobTitle: '',
      // favoriteMovies: [],
    }
    this.handleChangeIndex = this.handleChangeIndex.bind(this)
  }


  handleChangeIndex(direction){
    if(direction === 'up'){
      if(this.state.index < this.state.people.length -1){
        this.setState({
          index: this.state.index + 1
        })
      }else{
        this.setState({
          index: 0,
        })
      }
    }
    if(direction === 'down'){
      if(this.state.index > 0){
        this.setState({
          index: this.state.index -1
        })
      }else{
        this.setState({
          index: this.state.people.length -1
        })
      }
    }
    
  }

  
  render(){
    const {index, people} = this.state

    
    
    return(
      <div>
        <section className='body'>
          <div className='card'>
            <Person person={people[index]} people={people}/>
          </div>
          <div className='buttons-container'>

              <button className='person-change' onClick={() => this.handleChangeIndex('down')}> &lt; Previous </button>

              <button className='person-change' onClick={() => this.handleChangeIndex('up')}> Next > </button>
          </div>
        </section>
        
      </div>
        
    )
  }
}

export default Card