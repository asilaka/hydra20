import React from 'react'
import s from './Tarif.module.scss'

import Data from "./Data.js"
import Card from '../Card/card.jsx'
const Tarif = () => {
  return (
 <>
 <section className={s.tarifs}>
    <div className="container">
        <div className={s.wrap}>
           {Data.map(item =>(
            <Card title={item.title} text={item.text} image={item.image}/>
           ))}
        </div>
    </div>
 </section>
 </>
  )
}

export default Tarif