import React, { Component } from "react";
import Home from "./Home";
import ColorSec from './ColorSec';
import FeatureSec from './Feature';
import TimeLine from './Timeline';
import Product from './Product';
import Newsletter from "./Newletter";
import Footer from "./Footer";
class Index extends Component {
    render() {
        return (
            <div>
                <Home />
                <ColorSec />
                <FeatureSec />
                <TimeLine />
                <Product />
                <Newsletter />
                <Footer />
            </div>
        )
    }
}
export default Index;