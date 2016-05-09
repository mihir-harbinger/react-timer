var React = require('react');

//load top level components
var Navigation = require('Navigation');

module.exports = (props) => {
  return(
    <div>
      <Navigation />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};
