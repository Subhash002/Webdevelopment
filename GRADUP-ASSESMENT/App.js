import React, { Component } from "react";
import SongCard from "./Components/SongCard";
import songs from "./services/songs";
//import can differ
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs,
    };
  }
  sortByRating = () => {
    this.setState({
      songs: [...this.state.songs.sort((a, b) => b.rating - a.rating)],
    });
  };

  sortByTitle = () => {
    this.setState({
      songs: [
        ...this.state.songs.sort((a, b) =>
          a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
        ),
      ],
    });
  };
  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <button className="st-btn" onClick={this.sortByTitle} type="button">
          Sort By Title
        </button>
        <button className="st-btn" onClick={this.sortByRating} type="button">
          Sort By Rating
        </button>

        {this.state.songs.map((song) => {
          return <SongCard data={song} />;
        })}
      </div>
    );
  }
}

export default App;
