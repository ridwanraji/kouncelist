import React from "react";
import Counsel from "./components/Counsel";
// import Emoji from "./components/Emoji";
import "./Styles/App.css";
import RandomCounsel from "./components/RandomCounsel";
import "./Styles/Counsel.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      counsels: [],
      oneCounsel: {}
    };
  }
  componentDidMount() {
    let word = "me";

    // Load initial counsel from the API
    this.loadRandomCounsel();

    // Load random counsel from the API at specific interval
    setInterval(async () => {
      this.loadRandomCounsel();
    }, 60000);
    this.searchCounsel(word);
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
    // console.log(this.state.counsels);
    // console.log(this.state.oneCounsel)
    if (this.state.error) {
      return <div className="App">Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div className="App">Loading...</div>;
    } else {
      return (
        <div>
          <div className="App-header">
            <RandomCounsel counsel={this.state.oneCounsel.advice} />
          </div>
          {/* <div className="Footer">
            <h6>
              <Emoji symbol="🐐" />
              FOR KOBE 
              <Emoji symbol="  🙏🏾" />
            </h6>
          </div> */}
        </div>
      );
    }
  }
}

export default App;
