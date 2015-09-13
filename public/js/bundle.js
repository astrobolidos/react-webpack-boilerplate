webpackJsonp([0],[
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! c:\Source\Sandbox\react-webpack-boilerplate\src\app.js */1);
	module.exports = __webpack_require__(/*! c:\Source\Sandbox\react-webpack-boilerplate */1);


/***/ },
/* 1 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

<<<<<<< HEAD
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./app.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	
	var React = __webpack_require__(/*! react/addons */ 2);   
	var Router = __webpack_require__(/*! react-router */ 175); 
	var TextField = __webpack_require__(/*! material-ui */ 215).TextField; 
	window.React = React;
	 
	var appStyle = {
	  div: { background: 'lightGray', height: 300, width: 300, textAlign: 'center' },
	
	}
	
=======
	__webpack_require__(/*! ./scss/theme.scss */ 2)
	
	var React = __webpack_require__(/*! react/addons */ 3);  
	var Router = __webpack_require__(/*! react-router */ 176);
	var TextField = __webpack_require__(/*! material-ui */ 216).TextField;  
	window.React = React; 
	 
>>>>>>> origin/master
	var App = React.createClass({displayName: "App", 
	  render: function () { 
	    return (
	      React.createElement("div", {className: "container"}, 
	        React.createElement("header", null, 
	          React.createElement("ul", {style: {listStyleType:'none'}}, 
	            React.createElement("li", null, React.createElement(Link, {to: "app"}, "Dashboard")), 
	            React.createElement("li", null, React.createElement(Link, {to: "inbox"}, "Inbox")), 
	            React.createElement("li", null, React.createElement(Link, {to: "calendar"}, "Calendar"))
	          ), 
	          "Logged in as Lisandro Pacheco"
	        ), 
<<<<<<< HEAD
	
	        React.createElement(RouteHandler, {style: {clear:'both'}})
=======
	        React.createElement("br", null), 
	        React.createElement(RouteHandler, null)
>>>>>>> origin/master
	      )
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
	
	var Dashboard = React.createClass({displayName: "Dashboard",
	  handleClick: function(e) {
	    console.log('handleClick on dashboard')
	  }, 
	  render: function() {
	    return React.createElement("div", {style: appStyle.div, onClick: this.handleClick}, "dashboard")
	  }
	})
	
	var Inbox = React.createClass({displayName: "Inbox",
	  handleClick: function(e) {
	    console.log('handleClick on Inbox!')
	  },  
	  render: function() {
	    return React.createElement("div", {onClick: this.handleClick}, "Inbox") 
	  }
	})
	
	var Calendar = React.createClass({displayName: "Calendar",
	  render: function() {
	    return React.createElement("div", null, "Calendar", 
	      React.createElement(TextField, {floatingLabelText: "Enter a Date"}), 
	      React.createElement("br", null), 
	      React.createElement(Link, {to: "/"}, "Dashboard")
	    )
	  }
	})
	
	var routes = (
	  React.createElement(Route, {name: "app", path: "/", handler: App}, 
	    React.createElement(Route, {name: "inbox", handler: Inbox}), 
	    React.createElement(Route, {name: "calendar", handler: Calendar}), 
	    React.createElement(DefaultRoute, {handler: Dashboard})
	  )
	);
	
	Router.run(routes, function (Handler) {
	  React.render(React.createElement(Handler, null), document.body);
	});
	// Router.run(routes, Router.HistoryLocation, function (Handler, state) {
	//   React.render(<Handler routerState={state} environment="browser" />, document.body);
	// });
	
	


/***/ },
/* 2 */
/*!*****************************!*\
  !*** ./src/scss/theme.scss ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=bundle.js.map