import {Link} from "react-router";
class Footer extends React.Component{
	render(){
		return(
			<div id="footer">
			{this.props.children}
			<ul>
					<li>
					<Link to="/home">
						<img src="/images/widget_bar_home_nor.png"/>
						<p>首页</p>
						</Link>
					</li>
					<li>
					<Link to="/xqg">
						<img src="/images/widget_bar_location_nor.png"/>
						<p>乡情馆</p>
						</Link>
					</li>
					<li>
					<Link to="/cart">
						<img src="/images/widget_bar_cart_nor.png"/>
						<p>购物车</p>
						</Link>
					</li>
					<li>
					<Link to="/my">
						<img src="/images/widget_bar_me_nor.png"/>
						<p>我的</p>
						</Link>
					</li>
				</ul>
			</div>
		)
	}

}
export default Footer
