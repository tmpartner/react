import Footer from './footer'
import Img from './Img'
import Nav from './nav'
import Carousel from './carousel'
import Brand from './brand'

class Home extends React.Component{
  render(){
    return(
        <div id="home">
          <Header />
          <div id="content">
          <Carousel />
          <Nav />
          <Img />
          </div>
          <Footer />
        </div>
    )
  }
}
class Header extends React.Component{
	render(){
		return(
			<div id="header">
				<ul>
					<li></li>
					<li>首页</li>
					<li><img src="/images/home_search_black_icon.png"/></li>
				</ul>
			</div>
		)
	}
}
export default Home
