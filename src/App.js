import React ,{Fragment,Component} from 'react';
import './style/App.css';
import { TabBar } from 'antd-mobile';
import "./style/iconfont.css"
import Mylayout from  "./components/Mylayout"

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
     <Mylayout/>
      </Fragment>
     );
  }
}
 
export default App;

