import Footer from './footer'
class Xqg extends React.Component{
  render(){
    return(
          <div id='xqg'>
              <HeaderXqg />
              <div id="contentXqg">
                  xqgssssssssssssss
              </div>
              <Footer />
          </div>
    ) /
  }
}

class HeaderXqg extends React.Component{
	render(){
		return(
			<div id="header">
				<ul>
					<li></li>
					<li>乡情馆</li>
					<li></li>
				</ul>
			</div>
		)
	}
}
export default Xqg
