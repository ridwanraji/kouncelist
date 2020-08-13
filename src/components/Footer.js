import React from "react";
import Emoji from "./Emoji";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <span className="header">ONE-MINUTE RANDOM COUNSEL</span>
                <br></br>
                <span className="sub-header">
                    Made for fun and with{" "}
                    <span>
                        <Emoji symbol=" ❤️" />
                    </span>
                    {" "}
                    by <a href="https://github.com/ridwanraji"> Ridwan </a>
                </span>
            </footer>
        );
    }
}

export default Footer;
