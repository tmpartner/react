require("./styles/usage/app.scss")
import Root from './scripts/root'
import Header from './scripts/header'
import Footer from './scripts/footer'
import Carousel from './scripts/carousel'
import Nav from './scripts/nav'
import Img from './scripts/img'
import Brand from './scripts/brand'


ReactDOM.render(<Root/>,document.getElementById('app'))
ReactDOM.render(<Header/>,document.getElementById('header'))
ReactDOM.render(<Carousel/>,document.getElementById('lbbox'))
ReactDOM.render(<Nav/>,document.getElementById('navbox'))
ReactDOM.render(<Img/>,document.getElementById('imgbox'))
ReactDOM.render(<Brand/>,document.getElementById('brandbox'))
ReactDOM.render(<Footer/>,document.getElementById('footer'))
