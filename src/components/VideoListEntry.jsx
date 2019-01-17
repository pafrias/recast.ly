var VideoListEntry = props => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

//https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg 
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

VideoListEntry.defaultProps = {
  src: 'https://giphy.com/gifs/art-artists-on-tumblr-PlwtdKszlxyLK?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=https://giphy.com/explore/dancing-banana'
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
