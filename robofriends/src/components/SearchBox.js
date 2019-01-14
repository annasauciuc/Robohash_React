import React from 'react';
const SearchBox = ({ searchfield, searchChange }) => {
    return ( <div className = "pa2" >
        <input className = "pa3 br-pill ba b--green mb3 bg-lightest-blue"
        type = "search"
        placeholder = "Search friends"
        onChange = { searchChange }/>

        </div>

    )
}
export default SearchBox;