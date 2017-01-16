class Carousel extends React.Component{
	render(){
		return (
			<div id="carousel">
				<div className="swiper-container">
						<div className="swiper-wrapper">
								<div className="swiper-slide">
									<img src="/images/car-one.jpg"/>
								</div>
								<div className="swiper-slide">
									<img src="/images/car-two.jpg"/>
								</div>
								<div className="swiper-slide">
									<img src="/images/car-three.jpg"/>
								</div>
								<div className="swiper-slide">
									<img src="/images/car-four.jpg"/>
								</div>
								<div className="swiper-slide">
									<img src="/images/car-five.jpg"/>
								</div>
						</div>
						<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
}
export default Carousel
