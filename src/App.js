import React ,{Fragment,Component} from 'react';
import './style/App.css';
import "./style/iconfont.css"
import Mylayout from  "./components/Mylayout"
import  {HashRouter as Router , Link ,Route,} from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Mine from "./pages/Mine"

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <Router>
          <Route path="/" exact render={(props)=><Mylayout {...props}> <Home></Home>  </Mylayout>}  />
          <Route path="/Cart"  render={(props)=><Mylayout {...props}> <Mine></Mine>  </Mylayout>}/>
          <Route path="/Mine" render={(props)=><Mylayout {...props}>  <Cart></Cart>  </Mylayout>} />
         
     </Router>
      </Fragment>
     );
  }
}
 
export default App;

