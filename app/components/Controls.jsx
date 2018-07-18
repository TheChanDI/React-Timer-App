var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStaus: React.PropTypes.string.isRequired
    },

    render: function() {
        var {countdownStaus} = this.props;

        var renderStartStopButton = () => {
            if(countdownStaus === 'started') {
                return <button className="button secondary">Pause</button>
            }
            else if(countdownStaus === 'paused') {
                return <button className="button primary">Started</button>
            }
        }

        return (
            <div className="controls">
                {renderStartStopButton}
               <button className="button alert hollow">Clear</button>
            </div>
        );

    }

});

module.exports = Controls;