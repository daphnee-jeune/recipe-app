import React from 'react'
import Recipe from './Recipe'

const RecipeList = ({recipes, setRecipes}) => {

    const recipeList = recipes.map(recipe => {
        return <Recipe 
                key={recipe.recipe.label}
                label={recipe.recipe.label}
                image={recipe.recipe.image}
                url={recipe.recipe.url}
                ingredients={recipe.recipe.ingredients}
        />
    })

    return (
        <div className="recipewrapper" >
            {recipes !==[] && recipeList}
        </div>
    )
}

export default RecipeList
