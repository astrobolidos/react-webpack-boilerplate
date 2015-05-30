var React = require('react/addons');  
var Router = require('react-router');
var TextField = require('material-ui').TextField;
window.React = React;


// var injectTapEventPlugin = require("react-tap-event-plugin");
// // injectTapEventPlugin();
//     	<TextField
//   			hintText="Hint Text"
//  	 			floatingLabelText="Floating Label Text" />	
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
          Logged in as Lisandro
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

var Dashboard = React.createClass({
	render: function() {
		return <div>dashboard</div>
	}
})

var Inbox = React.createClass({
	render: function() {
		return <div>Inbox:</div>
	}
})

var Calendar = React.createClass({
	render: function() {
		return <div>Calendar
			<TextField floatingLabelText="Enter a Date" />
			<br/>
			<Link to="/">Dashboard</Link>
		</div>
	}
})

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});