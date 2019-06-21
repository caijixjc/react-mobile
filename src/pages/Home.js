import React ,{Fragment,Component}from 'react' ;
import {getGoods} from '../api';
import { Carousel } from 'antd-mobile';



class Home extends Component {
    state={
        sliderlist:[],
        imgHeight: 176,
    }
   componentDidMount() {
       getGoods()
       .then(res=>{
           console.log(res);
           if(res.status===0){
            this.setState({ sliderlist: res.message.sliderlist });
           }
       })
   }
    render() { 
        return (
            <Fragment>
                <Carousel
          autoplayInterval={1000}
          autoplay={true}
          infinite={true}
         
        >
          {this.state.sliderlist.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

            </Fragment>
          );
    }
}
export default Home;
 