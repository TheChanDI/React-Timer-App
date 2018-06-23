var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
            <div className="top-bar-left">
            <ul className="menu"> 
             <li className="menu-text">
             React Timer App
             </li>
                <li>
                <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Timer </IndexLink>
                </li>
                <li>
                <Link  to='/Countdown' activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Countdown</Link>
                </li>

            </ul>
            </div>

            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="#" target="_blank">Prakash Chandra Awal</a>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;