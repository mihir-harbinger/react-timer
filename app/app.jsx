var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//top level components
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//load foundation
$(document).foundation();

//load custom css
require('style!css!sass!AppCss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer} />
      <Route path="/countdown" component={Countdown} />
    </Route>
  </Router>,
  document.getElementById('app')
);
