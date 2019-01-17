import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import Search from '/compiled/src/components/Search.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target);
    this.state.mainVideo = exampleVideoData[1];
    console.log(this.state.mainVideo);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.mainVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onPress={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }

  otherfunction() {

  }
}

App.propTypes = {
  // process example video data
};
//comment more than enough
//       line 13 <div><h5><em>videoList</em> view goes here</h5></div> 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;