import React from 'react';
import './App.css';
import { TabBar } from 'antd-mobile';
import "./style/iconfont.css"

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
 
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div className="iconfont icon-home "  /> }
            selectedIcon={<div className="iconfont icon-home "/> }
            selected={this.state.selectedTab === 'blueTab'}
            badge={''}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            1
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className="iconfont icon-gouwuche " />}
            selectedIcon={ <span className="iconfont icon-gouwuche " />}
            title="购物车"
            key="gouwuche"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            2
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            selectedIcon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            3
          </TabBar.Item>
          
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample;
