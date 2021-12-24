import React from 'react'
import Button  from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

import './countryCard.scss'

type CountryCardProps={
    flag:string
    name:string
    region:string 
}

const CountryCard=({flag, name, region}:CountryCardProps) =>{


    return (
        <div  className="country-card" key={name}>
           
            <div className="country-card__wrapper">
            <Link to={`/country/${name}`}>
                <img src={flag} alt={name} />

                <h2 className="country-card__name">{name}</h2>
                <h2 className="country-card__region">{region}</h2>
                </Link>
                <div className="country-card__action">
                <Button  className="btn btn__primary" onClick={()=>console.log("selected")} > Add to cart </Button>

                </div>


                </div>
            
            
        </div>
    )
}

export default CountryCard