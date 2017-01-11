require("./styles/usage/app.scss")
var Header=require("./scripts/header")
var Root=require("./scripts/root")
var Footer=require("./scripts/footer")


ReactDOM.render(<Root/>,document.getElementById('app'))
ReactDOM.render(<Header/>,document.getElementById('header'))
ReactDOM.render(<Footer/>,document.getElementById('footer'))

