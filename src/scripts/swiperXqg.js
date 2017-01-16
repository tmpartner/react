class SwiperXqg extends React.Component{
  constructor(props) {
      super(props);
      this.state = {res: ''};
    }
  componentWillMount() {
    fetch(this.props.url).then(response => response.json()).then(res => {
      this.setState({"res":res})
    })

    }
  render() {
    return(<div className="swiper-container" >
          <div className="swiper-wrapper">
              <div className="swiper-slide">
                  <img src='./images/1.jpg'/>
              </div>
              <div className="swiper-slide">
                  <img src='./images/2.jpg'/>
              </div>
              <div className="swiper-slide">
                  <img src='./images/3.jpg'/>
              </div>
              <div className="swiper-slide">
                  <img src='./images/4.jpg'/>
              </div>

              <div className="swiper-slide">
                  <img src='./images/5.jpg'/>
              </div>
          </div>
          <div className="swiper-pagination"></div>
      </div>
    )
  }
}
SwiperXqg.defaultProps={url:"/api/list"}
export default SwiperXqg
