var React = require('react');

//load top level components
var Navigation = require('Navigation');

module.exports = (props) => {
  return(
    <div>
      <Navigation />
      {props.children}
    </div>
  );
}
