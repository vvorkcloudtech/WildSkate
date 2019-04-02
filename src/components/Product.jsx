import React, { Component } from "react";
class Product extends Component {
    render() {
        return (
            <section id="Product" className="">
                <div className="container">
                    <div className="row d-flex justify-content-center align-content-center flex-wrap">
                        <div className="col-md-4">
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <img src="./assets/img/blue-1.png" className="img-fluid" alt="" />
                                <h3 className="text-center">K-Beats Wireless Headphone-Blue</h3>
                                <h2>$349.99</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <img src="./assets/img/black-1.png" className="img-fluid" alt="" />
                                <h3 className="text-center">K-Beats Wireless Headphone-Blue</h3>
                                <h2>$429.99</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <img src="./assets/img/white-1.png" className="img-fluid" alt="" />
                                <h3 className="text-center">K-Beats Wireless Headphone-Blue</h3>
                                <h2>$721.99</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Product;