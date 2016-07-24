import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

              <ul className="nav navbar-nav" role="nav">
                <li><IndexLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</IndexLink></li>
                <li><NavLink to="/comics">Comics</NavLink></li>
                <li><NavLink to="/characters">Characters</NavLink></li>                
              </ul>
          </div>
        </nav>
        {this.props.children || <Home/>}
      </div>
    )
  }
})
