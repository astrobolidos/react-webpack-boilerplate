var React       = require('react/addons'); 
var Router      = require('react-router');
var Link      = Router.Link;

var Inbox = React.createClass({
  handleClick: function(e) {
    console.log('handleClick on Inbox!')
  },  
  render: function() {
    return <div onClick={this.handleClick}>Inbox</div> 
  }
})

module.exports = Inbox
