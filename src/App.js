import React from "react";
import Counsel from "./components/Counsel";
import "./Styles/App.css";
import RandomCounsel from "./components/RandomCounsel";
import "./Styles/Counsel.css";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      counsels: [],
      oneCounsel: {},
      word: "love"
    };
  }
  componentDidMount() {

    // Load initial counsel from the API
    this.loadRandomCounsel();

    // Load random counsel from the API at specific interval
    setInterval(async () => {
      this.loadRandomCounsel();
    }, 60000);
    this.searchCounsel(this.state.word);
  }

  /**
   * A function that Generate random counsel from API
   */
  async loadRandomCounsel() {
    try {
      fetch("https://api.adviceslip.com/advice")
        .then(response2 => response2.json())
        .then(
          data2 => {
            this.setState({
              isLoaded: true,
              oneCounsel: data2.slip
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * A function that search keyword from the API.
   * If keyword is found, return an array object conataining
   * the corresponding keywords
   * @param {*} x Keyword to search from the API
   */
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
    const counselList = this.state.counsels.map(item => (
      <Counsel key={item.slip_id} counsel={item.advice} />
    ));
    return (
      <div className="App">
        <p> {counselList}</p>
      </div>
    );
  }

  render() {
    console.log(this.state.counsels);
    console.log(this.state.oneCounsel)
    if (this.state.error) {
      return (
        <div className="App-header">Error: {this.state.error.message}</div>
      );
    } else if (!this.state.isLoaded) {
      return (<div className="App-header">Loading...</div>);
    }

    else if (this.state.counsels === undefined) {
      return (
        <div className="App-header"> Sorry, I can't counsel you about "{this.state.word}" right now </div>
        );
  } else {
  return (
    <div>
      <div className="App-header">
        <RandomCounsel counsel={this.state.counsels[2].advice} />
      </div>
      <Footer />
      <SearchBar />
    </div>
  );
}
  }
}

export default App;
