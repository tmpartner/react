var Footer = React.createClass({
	render:function(){
		return(
				<div>
					<ul>
						<li>
							<img src="/images/widget_bar_home_nor.png"/>
							<p>首页</p>
						</li>
						<li>
							<img src="/images/widget_bar_location_nor.png"/>
							<p>乡情馆</p>
						</li>
						<li>
							<img src="/images/widget_bar_cart_nor.png"/>
							<p>购物车</p>
						</li>
						<li>
							<img src="/images/widget_bar_me_nor.png"/>
							<p>我的</p>
						</li>
					</ul>
				</div>
			)
	}
})

module.exports=Footer;