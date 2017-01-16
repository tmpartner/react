class SwiperXqgChild extends React.Component{

  render(){
    var banner = JSON.parse(this.props.name.banner)
    return(
                <div className="swiper-slide">
                  <img src={banner}/>
                </div>
    )
  }
}
export default SwiperXqgChild
