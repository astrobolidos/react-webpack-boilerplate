
var Router 		= require('react-router');
var App 			= require('./App.jsx');
var Dashboard 	= require('./Dashboard.jsx');
var Calendar 	= require('./Calendar.jsx');
var Inbox 		= require('./Inbox.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar} />
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

module.exports = routes;

// Router.run(routes, Router.HistoryLocation, function (Handler, state) {
//   React.render(<Handler routerState={state} environment="browser" />, document.body);
// });