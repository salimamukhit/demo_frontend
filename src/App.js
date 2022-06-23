import './App.css';
import NavBar from './NavBar';
import HomeView from './HomeView';
import ManageView from './ManageView';
import SettingsView from './SettingsView';
import { FaHome, FaPencilAlt, FaRegSun, FaAngleLeft } from 'react-icons/fa';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentView: 'home'};
  }
  navBarItems = [
    {
      label: 'Home',
      icon: <FaHome className='nav-icon'/>,
      click: () => {
        this.setState({
          currentView: 'home'
        });
      },
      view: 'home-view'
    },
    {
      label: 'Manage',
      icon: <FaPencilAlt className='nav-icon' />,
      click: () => {
        this.setState({
          currentView: 'manage'
        });
      },
      view: 'manage-view'
    },
    {
      label: 'Settings',
      icon: <FaRegSun className='nav-icon' />,
      click: () => {
        this.setState({
          currentView: 'settings'
        });
      },
      view: 'settings-view'
    }
  ];

  renderView(view) {
    switch (view) {
      default: 
        return (
          <HomeView />
        )
      case 'home':
        return (
          <div>
            <HomeView />
          </div>
        )
      case 'manage':
        return (
          <div>
            <ManageView />
          </div>
        )
      case 'settings':
        return (
          <div>
            <SettingsView />
          </div>
        )
    }
  }

  render() {
    return (
      <div className='grid grid-cols-4 gap-2'>
        <div className='col-span-1'>
          <NavBar 
            navBarItems={this.navBarItems}
            logoutIcon={<FaAngleLeft className='nav-icon' />}
          />
        </div>
        <div className='col-span-3' style={{position: 'fixed', left: 340}}>
          {this.renderView(this.state.currentView)}
        </div>
      </div>
    )
  }
}

export default App;
