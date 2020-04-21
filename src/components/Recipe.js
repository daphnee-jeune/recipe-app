import React, {useState} from 'react'
import Details from './Details'

const Recipe = ({label, image, url, ingredients}) => {
    const [show, setShow] = useState(false)
    return (
        <div className="recipe">
            <img src={image} alt={label} className="recipeImg" />
            <h2 className="label">{label}</h2>
            <a 
                className="details-btn"
                href={url} 
                target="_blank"  
                rel="noopener noreferer"
            >Learn more</a>

           <button 
                className="show-btn" 
                onClick={() => setShow(!show)}>
                Ingredients
            </button>

           {show && <Details ingredients={ingredients} label={label} show={show} />}
        </div>
    )
}

export default Recipe
