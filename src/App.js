import React from "react";
import Counsel from "./components/Counsel";
import "./App.css";
import "./Counsel.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      counsels: []
    };
  }
  componentDidMount() {
    let word = "melody";
    this.searchCounsel(word);
  }

  searchCounsel(x) {
    fetch(`https://api.adviceslip.com/advice/search/${x}`)
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            counsels: data.slips
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    console.log(this.state.counsels);

    if (this.state.error) {
      return <div className="App">Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div className="App">Loading...</div>;
    } else {
      const counselData = this.state.counsels.map(item => (
        <Counsel key={item.slip_id} counsel={item.advice} />
      ));
      return (
        <div className="App">
          <header className="App-header">{counselData}</header>
        </div>
      );
    }
  }
}

export default App;
