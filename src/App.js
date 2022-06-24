import './App.css';
import NavBar from './navbar/NavBar';
import HomeView from './views/home/HomeView';
import ManageView from './views/manage/ManageView';
import SettingsView from './views/settings/SettingsView';
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
        this.navigate('home');
      },
      view: 'home-view'
    },
    {
      label: 'Manage',
      icon: <FaPencilAlt className='nav-icon' />,
      click: () => {
        this.navigate('manage')
      },
      view: 'manage-view'
    },
    {
      label: 'Settings',
      icon: <FaRegSun className='nav-icon' />,
      click: () => {
        this.navigate('settings');
      },
      view: 'settings-view'
    }
  ];

  navigate(view) {
    this.setState({
      currentView: view
    });
  }

  renderView(view) {
    switch (view) {
      default: 
        return (
          <HomeView />
        )
      case 'home':
        return (
            <HomeView />
        )
      case 'manage':
        return (
            <ManageView />
        )
      case 'settings':
        return (
            <SettingsView />
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
        <div className='col-span-3 content-container'>
          {this.renderView(this.state.currentView)}
        </div>
      </div>
    )
  }
}

export default App;
