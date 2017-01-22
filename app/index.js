var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Hello from Hikkaduwa </div>
    )
  }
});

ReactDOM.render(
    <HelloWorld />, document.getElementById('app')
);
