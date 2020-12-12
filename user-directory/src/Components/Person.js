import React from 'react'
import './person.css'

const Person = (props) =>{
   const {first, last} = props.person.name
  // for (let key in props.person){
  //   if (key !== props.person.name){
       
  //     return  <h3>{props.person[key]}</h3>
      
  //   }
  // }

  
  return(
    <div className='person'>
      <div className='person-id'>
        <h3>{props.person.id}/{props.people.length}</h3>
      </div>
      
      <div className='info'>
        
        <h1 className='name'>{first} {last}</h1>
        
        <br/>
        <div className='info-style'>
          <h4 >From:</h4>
          <p>{props.person.city}, {props.person.country}</p>
        </div>
           
        <div className='info-style'>
          <h4>Employer: </h4>
          <p>{props.person.employer}</p>
        </div>

        <div className='info-style'>
          <h4 >Job Title: </h4>
          <p>{props.person.title}</p>
        </div>  
        <br/>
        <h4 className='list'>Favorite Movies:</h4>
      </div>
        
        
      
      
      
      <ol>
        <li> {props.person.favoriteMovies[0]}</li>
        <li> {props.person.favoriteMovies[1]}</li>
        <li> {props.person.favoriteMovies[2]}</li>
      </ol>
      
    </div>
  )
}

export default Person