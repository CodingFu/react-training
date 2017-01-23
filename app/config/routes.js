var React = require('react')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// Components
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route header="Player One" path="playerOne"
        component={PromptContainer}/>
      <Route header="Player Two" path="playerTwo/:playerOne"
        component={PromptContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
