require("./app.scss");

var React = require('react/addons');
window.React = React; 

var Router = require('react-router');
var Routes = require('./jsx/routes.jsx');

var Router = require('react-router'); 
var TextField = require('material-ui').TextField; 
 
var appStyle = {
  div: { background: 'lightGray', height: 300, width: 300, textAlign: 'center' },

}

var App = React.createClass({ 
  render: function () { 
    return (
      <div className="container">
        <header>
          <ul style={{listStyleType:'none'}}>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
          Logged in as Lisandro
        </header>

        <RouteHandler style={{clear:'both'}}/>
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

var Dashboard = React.createClass({
  handleClick: function(e) {
    console.log('handleClick on dashboard')
  }, 
  render: function() {
    return <div style={appStyle.div} onClick={this.handleClick}>dashboard</div>
  }
})



Router.run(Routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
