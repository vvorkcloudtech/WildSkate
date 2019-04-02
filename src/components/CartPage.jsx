import React, { Component } from 'react';
import NavBar from "./Navbar";
class Cart extends Component {
    render() {
        return (
            <section id="CartPage">
                <div className="container-fluid">
                    <NavBar />
                    <div className="container">
                        <div className="content d-flex align-items-center justify-content-center flex-column">
                            <h1>Shopping Cart</h1>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Model</th>
                                            <th>Quantity</th>
                                            <th>Unit Price</th>
                                            <th>Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                            <td><img src="./assets/img/black-1.png" alt="" /></td>
                                            <td>K-Beats Black Premium</td>
                                            <td>2019</td>
                                            <td>1</td>
                                            <td>$458.55</td>
                                            <td>$500</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="process">
                                    <button>CheckOut</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Cart;