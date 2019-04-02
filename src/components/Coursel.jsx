import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class DemoCarousel extends Component {
    OnChangeHandler=()=>{
        var i =0;
        console.log(i+1)
    }
    render() {
        return (
            <div className="col-md-6">
                <Carousel showStatus={false} className={"slides"} showArrows={false} showThumbs={false} >
                    <div>
                        <img className="img-fluid" style={({"zIndex" : "5000"})} src="assets/img/headphones-1.png" />
                    </div>
                    <div>
                        <img className="img-fluid" style={({"zIndex" : "5000"})} src="assets/img/headphones-2.png" />
                    </div>
                    <div>
                        <img className="img-fluid" style={({"zIndex" : "5000"})} src="assets/img/BlackGold.png" />
                    </div>
                </Carousel>
            </div>
        );
    }
}
export default DemoCarousel;