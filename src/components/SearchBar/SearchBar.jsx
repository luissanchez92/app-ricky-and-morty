import React from 'react';
import styles from './Search.module.css'
import { useState } from 'react';


export default function SearchBar({onSearch}) {
   const [character, setCharacter]= useState('');
   
   const handleChange=(event)=>{setCharacter(event.target.value)}

   return (
      <div className={styles.divSearch}>
         <input type='search' value={character} onChange={handleChange} className={styles.inputSearch} />
         <button className={styles.button} onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
