import React from 'react';
import styles from './Card.module.css'




export default function Card({onClose, name, id, species, gender, image}) { 
   return ( 
      <div className={styles.divCard} >
         <button onClick={()=>onClose(id)} className={styles.button}>X</button> 
         <h2>Name: {name}</h2>
         <img  src={image} alt="" />
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Id: {id}</h2>
      </div>
   );
};
