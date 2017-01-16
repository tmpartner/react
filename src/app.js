import {Router,Route,hashHistory} from "react-router";
require("./styles/usage/app.scss")
import Home from './scripts/home'

ReactDOM.render(<Home/>,document.getElementById('app'))
// ReactDOM.render(<Header/>,document.getElementById('header'))
// ReactDOM.render(<Footer/>,document.getElementById('footer'))
// const routes = {
// 	path : "/",
// 	component : Home, //路由开始显示的页面,
// 	// indexRoute : {component:ComponentIndex}, //indexRoute用来进行组件的嵌套，不需要嵌套的话可以不写
// 	childRoutes : [ //这childRoutes里进行子路由的配置，每一个路由都是一个对象
// 	//在对象里有path comopent等
// 		{
// 			path : "/home",
// 			component : Home,
// 			// indexRoute : {component:ComponentIndex}
// 		},
// 		{
// 			path : "/xqg",
// 			component : Xqg
// 		},
// 		{
// 			path : "/cart",
// 			component : cart
// 		},
// 		{
// 			path : "/my",
// 			component : My
// 		}
// 	]
// }

//1.2个参数
//2.把配置好的路由渲染到页面
// ReactDOM.render(<Router routes={routes} history={hashHistory}/>,document.getElementById("app"));
