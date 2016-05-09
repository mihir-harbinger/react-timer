var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function(){
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  render: function(){
    var {totalSeconds} = this.props;
    return(
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    )
  },
  formatSeconds: function(totalSeconds){
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if(seconds < 10){
      seconds = '0' + seconds;
    }
    if(minutes < 10){
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }
});
