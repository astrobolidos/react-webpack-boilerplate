var React = require('react/addons'); 

var Dashboard = React.createClass({
  handleClick: function(e) {
    console.log('handleClick on dashboard')
  }, 
  render: function() {
    return <div onClick={this.handleClick}>dashboard yo! asdf</div>
  }
})

module.exports = Dashboard;