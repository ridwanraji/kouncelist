import React from "react"

class Counsel extends React.Component {
    render (){
        return(
            
            <div>
                <p className="counsel-item"> {this.props.counsel} </p>
            </div>
        )
    }
}
export default Counsel