import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose} = props;
   return (
      <div className={styles.divCards}>
         {
            characters.map(({name, id, species, gender, image})=>{
               return <Card
                  name={name}
                  id={id}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={onClose} // id // characters
               />
            })
         }
      </div>
   )
}
