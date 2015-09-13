var React 			= require('react/addons'); 
var Router 			= require('react-router');
var Link 			= Router.Link;
var RouteHandler 	= Router.RouteHandler;

var App = React.createClass({ 
  render: function () { 
    return (
      <div className="container">
        <header>
          <ul>
            <li><Link to="app">Dashboard </Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
          Logged in as Lisandro Pacheco
        </header>
        <br/>
        <div className="content">
        	<RouteHandler/>
        </div>
      </div>
    );
  }
}); 

module.exports = App;