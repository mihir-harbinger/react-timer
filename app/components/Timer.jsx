var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      count: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function(previousProps, previousState){
    if(this.state.timerStatus !== previousState.timerStatus){
      switch(this.state.timerStatus){
        case "started":
        this.handleStart();
          break;
        case "paused":
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        case "stopped":
          clearInterval(this.timer);
          this.setState({
            count: 0
          })
          break;
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  render: function(){
    var {count, timerStatus} = this.state;

    return(
      <div>
        <h1 className="text-center page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  },
  handleStatusChange: function(newTimerStatus){
    console.log(newTimerStatus);
    this.setState({
      timerStatus: newTimerStatus
    });
  },
  handleStart: function(){
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }
});
