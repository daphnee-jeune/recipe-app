import React from 'react'
import Alert from './Alert'

const Searchbar = ({handleChange, handleSubmit, query, alert}) => {
    return (
        <div className="header">
            <h2 className="title">Yummie</h2>
            <form className="search-form" onSubmit={handleSubmit} >
                {alert !== "" && <Alert alert={alert} />}
                <input 
                    type="text"
                    placeholder="Search for recipes"
                    autoComplete="off"
                    className="search-input"
                    onChange={handleChange}
                    value={query}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
        </div>
    )
}

export default Searchbar
