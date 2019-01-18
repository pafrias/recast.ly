import exampleVideoData from '../data/exampleVideoData.js';
import YouTubeData from '/compiled/src/components/YouTubeData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from '/compiled/src/components/Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVideo: 0,
      videoList: exampleVideoData // -> export of youtubeDATA
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchHelper = this.searchHelper.bind(this);
  }

  handleClick(event) {
    var text = event.target.textContent;
    var num = _.findIndex(this.state.videoList, (video) => {
      return video.snippet.title === text;
    });
    this.selectVideo(num);
  }

  selectVideo(num) {
    this.setState((state) => {
      return { mainVideo: num };
    });
  }

  handleSearch() { //activates on enter key?
    var input = $('input.form-control').val();
    searchYouTube({key: YOUTUBE_API_KEY, q: input, maxResults: 5, part: 'snippet'}, this.searchHelper);
  }

  searchHelper(data) { // works with this.state
    console.log(data);
    this.setState(state => {
      return {mainVideo: 0, videoList: data.items};
    });
    // retrieve the text from search navbar
    // invoke searchYouTube.js
    // pass off to youtubeDATA
    // update state
    // --> new mainVideo
    // --> new videoList

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.handleSearch} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoList[this.state.mainVideo]} />
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