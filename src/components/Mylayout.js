import React from 'react';
import { TabBar } from 'antd-mobile';
import "../style/iconfont.css"


class Mylayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
 
  render() {
      console.log(this.props);
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
            selected={this.props.match.url==='/'}
            badge={''}
            onPress={() => {this.props.history.push("/")}}
          >
            {this.props.match.url==='/'?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className="iconfont icon-gouwuche " />}
            selectedIcon={ <span className="iconfont icon-gouwuche " />}
            title="购物车"
            key="gouwuche"
            badge={'new'}
            selected={this.props.match.url==='/Cart'}
            onPress={() => {this.props.history.push("/Cart")}}
          >
             {this.props.match.url==='/Cart'?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            selectedIcon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            title="我的"
            key="Mine"
            dot
            selected={this.props.match.url==='/Mine'}
            onPress={() => {this.props.history.push("/Mine")}}

          >
            {this.props.match.url==='/Mine'?this.props.children:null}
          </TabBar.Item>
          
        </TabBar>
      </div>
    );
  }
}

export default Mylayout;
