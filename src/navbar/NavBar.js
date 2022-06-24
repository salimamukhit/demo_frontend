import React from "react";
import './NavBar.css';

class NavBar extends React.Component {

  render() {
    return (
      <div className='text-xl h-screen navbar'>
        <div className='text-2xl nav-header'>
          Grades Journal
        </div>
        {
          this.props.navBarItems.map(function(item) {
            return <div key={item.view} onClick={item.click} className='nav-item'>{item.icon} {item.label}</div>
          })
        }
        <div className='logout'>
          <div className='nav-item'>
            {this.props.logoutIcon} Logout
          </div>
        </div>
      </div>
    ) 
  }
}

export default NavBar;