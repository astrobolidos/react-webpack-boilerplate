require('./scss/theme.scss')

var React = require('react/addons');  
var Router = require('react-router');
var TextField = require('material-ui').TextField;  
window.React = React;
 
var App = React.createClass({
  render: function () { 
    return (
      <div className="container">
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
          Logged in as Lisandro Pacheco
        </header>
        <br/>
        <RouteHandler/>
      </div>
    );
  }
}); 

// var injectTapEventPlugin = require("react-tap-event-plugin");
// // injectTapEventPlugin();
//      <TextField
//        hintText="Hint Text"
//          floatingLabelText="Floating Label Text" />  
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var appStyle = {
  div: { background: 'lightGray', height: 300, width: 300, textAlign: 'center' }
}

var Dashboard = React.createClass({
  handleClick: function(e) {
    console.log('handleClick on dashboard')
  }, 
  render: function() {
    return <div style={appStyle.div} onClick={this.handleClick}>dashboard</div>
  }
})

var Inbox = React.createClass({
  handleClick: function(e) {
    console.log('handleClick on Inbox!')
  },  
  render: function() {
    return <div onClick={this.handleClick}>Inbox</div> 
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



