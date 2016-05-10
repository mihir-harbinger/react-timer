var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var TimerMixin = require('react-timer-mixin');
var Controls = require('Controls');

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
  componentDidUpdate: function(previousProps, previousState){
    if(this.state.countdownStatus !== previousState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  render: function(){
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if(countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      }
      return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
    }
    return(
      <div>
        <h1 className="page-title text-center">Countdown</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  startTimer: function(){
    this.timer = setInterval(() =>{
      var newCount = this.state.count - 1;
      console.log(newCount);
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0){
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },
  handleStatusChange: function(newStatus){
    this.setState({
      countdownStatus: newStatus
    });
  }
});
