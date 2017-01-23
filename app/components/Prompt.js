var React = require('React');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

var Prompt = function(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-container" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input className="form-control"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text"
              placeholder="Github Username"/>
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired
},

module.exports = Prompt;
