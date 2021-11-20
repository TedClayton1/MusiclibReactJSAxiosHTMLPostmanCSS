// import Addsong from "./components/AddSong/AddSong";
import React, { Component } from "react";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";
// import SearchBar from "./components/SearchBar/SearchBar";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }


componentDidMount() {
  this.getMusic();
}

getMusic = async () => {
  let response = await axios.get("http://localhost:8000/music/",{
    mode: "no-cors"
  });
  console.log(response.data);
  this.setState({
    songs: response.data,
  });
};

addNewSong = (newSong) => {
  axios
    .post('http://localhost.8000/music/', newSong)
    .then((response) => console.log("Post", response));
  this.getMusic();
};



deleteSong = (deleteSong) => {
  axios
    .delete('http://localhost:8000/music/3', deleteSong)
    .then((response) => console.log("Delete", response));
  this.deleteSong();
};




getSongs = async () => {
  let response = await axios.get("http://127.0.0.1:8000/music/")
   console.log(response.data.songs);
   this.setState({
     songs: response.data.songs
   })
}

render() {
  return (
    <div className="App">      
      
        < MusicTable songs={this.state.songs} deleteSong={this.deleteSong}/>
      </div>
  )
}
}
export default App;