import React from "react"

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <input type="text" className="search-input" placeholder="Search for councel" />
            </div>
        )
    }
}

export default SearchBar