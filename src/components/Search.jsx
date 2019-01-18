var Search = props => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button onClick={props.search} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);
// make enter key work
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
