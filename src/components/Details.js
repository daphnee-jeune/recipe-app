import React from 'react'

const Details = ({ingredients, label}) => {

    let ingredientList = ingredients.map(item => {
        return (
            <ul key={label} >
                <li className="ingredient"> {item.text} </li>
            </ul>
        )
    })

    return (
        <div className="ingredientList">
            {ingredientList}
        </div>
    )
}

export default Details
