require("./styles/usage/app.scss");
import {Router,Route,hashHistory} from "react-router";
import Root from './scripts/root'
import Header from './scripts/header'
import Footer from './scripts/footer'
import SwiperXqg from './scripts/swiperXqg'
import Cart from './scripts/cart'
import My from './scripts/my'
//
ReactDOM.render(<Root/>,document.getElementById('app'))
ReactDOM.render(<Header/>,document.getElementById('header'))
ReactDOM.render(<Footer/>,document.getElementById('footer'))
ReactDOM.render(<SwiperXqg/>,document.getElementById('xqg'))
const routes = {
	path : "/",
	component : Header, //路由开始显示的页面,
	// indexRoute : {component:SwiperXqg}, //indexRoute用来进行组件的嵌套，不需要嵌套的话可以不写
	childRoutes : [ //这childRoutes里进行子路由的配置，每一个路由都是一个对象
	//在对象里有path comopent等
		{
			path : "/root",
			component : Root
			// indexRoute : {component:SwiperXqg}
		},
		{
			path : "/xqg",
			component : SwiperXqg
		},
		{
			path : "/cart",
			component : Cart
		},
    {
			path : "/my",
			component : My
		}
	]
}

//1.2个参数
//2.把配置好的路由渲染到页面
// ReactDOM.render(<Router routes={routes} history={hashHistory}/>,document.getElementById("app"));
