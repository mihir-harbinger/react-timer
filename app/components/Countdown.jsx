var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var TimerMixin = require('react-timer-mixin');

module.exports = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function(){
    return{
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function(previousProps, previousState){
    if(this.state.countdownStatus !== previousState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  render: function(){
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  },
  startTimer: function(){
    var timer = this.setInterval(() =>{
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }
});
