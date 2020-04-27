import React from "react"

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <input type="text" className="search-input" value="love" placeholder="Search for councel" />
                <button > Search </button>
            </div>
        )
    }
}

export default SearchBar