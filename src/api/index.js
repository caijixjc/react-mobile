// 定义路由
import axios from "axios"
        // 同意请求前缀
    axios.defaults.baseURL='http://react.zbztb.cn'

    // 拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response.data;
      }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      });
  export const getGoods=()=>axios("/site/goods/gettopdata/goods")