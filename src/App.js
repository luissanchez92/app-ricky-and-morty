                          
//import SearchBar from './components/SearchBar/SearchBar'                         
//import characters from '../src/data.js'
//import style from '../src/App.module.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'  
import { useState } from 'react'


function App () {
  const [characters, setCharacters]= useState([]) //setcharacters
  
  const onSearch=(character)=>{  //funcion se le pasa a nav para que se la pase o onserbach
    const key='9a471da58025.5031e2fc217470ee249f';
    fetch(`https://rickandmortyapi.com/api/character/${character}?key=${key}`)
      .then((response) => response.json())
      .then(data => {
         if (data.name && !characters.find(char=>char.id ===data.id)) {   //esto para que no se repitan loas imagenes
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })

  }
  const onClose=(id)=>{
    setCharacters( characters.filter((char)=> char.id !==id))    // funcion que elimina cada muñequito x
  }


  return ( // nav recibio la funcion onSearch
    <div>
      <Nav onSearch={onSearch} />   
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App
