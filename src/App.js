import React, {useState} from 'react'
import './App.css'
import axios from "axios"
import Searchbar from './components/Searchbar'
import RecipeList from './components/RecipeList'

const App = () => {
  //State
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [alert, setAlert] = useState("")

  //API info
  const APP_ID = "81ff33af"
  const APP_KEY = "53e274b6eb5b9aced3fa31ee2f8a23f6"
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(URL)
      if(!result.data.more) {
        return setAlert("Invalid entry")
      }
      setRecipes(result.data.hits)
      console.log(result)
    } else {
      setAlert("Please enter a value")
    }
  }

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    getData()
    setQuery("")
  }

  return (
    <div className="App">
       <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} query={query} alert={alert} setAlert={setAlert} />
       <RecipeList recipes={recipes} setRecipes={setRecipes} />
    </div>
  )
}

export default App
