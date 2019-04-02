import React, { Component } from "react";
class Newsletter extends Component {
    render() {
        return (
            <section id="newsletter" className="d-flex align-items-center justify-content-center flex-column">
                <h1 className="text-center"><span>HEAR</span> IT FIRST</h1>
                <p className="text-center text-muted">Get updates on product drops, collaborations and all things Beats.</p>
                <input className="my-2" type="text" placeholder="Enter Your Email Here......" />
                <button>Send Now</button>
            </section>
        )
    }
}
export default Newsletter;