require("./styles/usage/app.scss")
import Root from './scripts/root'
import Header from './scripts/header'
import Footer from './scripts/footer'


ReactDOM.render(<Root/>,document.getElementById('app'))
ReactDOM.render(<Header/>,document.getElementById('header'))
ReactDOM.render(<Footer/>,document.getElementById('footer'))
