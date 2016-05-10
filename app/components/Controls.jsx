var React = require('react');

module.exports = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  render: function(){
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === "started"){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }
      else if(countdownStatus === "paused"){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    }

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  },
  onStatusChange: function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }
});
