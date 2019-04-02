import React, { Component } from "react";
import Coursel from "./Coursel";
class FeatureSec extends Component {
    render() {
        return (
            <section id="FeatureSec" className="container-fluid">
                <h3><span>FEATURES</span> HEADPHONE</h3>
                <p className="text-center text-muted">Hear the music. Not the noise.</p>
                <div className="row d-flex justify-content-center align-items-center flex-wrap-reverse flex-row">
                    <Coursel />
                    <div className="Content col-md-6 d-flex flex-column justify-content-space align-items-center">
                        <div className="w-100 p-6 d-flex flex-row flex-nowrap align-items-center justify-content-around">
                            <i className="flaticon-music dot"></i>
                            <div className="TextContent">
                                <h5>Responsive Noise Blocking</h5>
                                <p>Pure ANC continuously pinpoints and blocks external sounds while automatically responding to individual fit and music playback.</p>
                            </div>
                        </div>
                        <div className="w-100 p-6 d-flex flex-row flex-nowrap align-items-center justify-content-around">
                            <i className="flaticon-speaker"></i>
                            <div className="TextContent">
                                <h5>Sealed For Sound</h5>
                                <p>Soft, over-ear cushions feature advanced venting and signature ergonomic pivoting for a custom, flexible fit that keeps the music in and the noise out.</p>
                            </div>
                        </div>
                        <div className="w-100 p-6 d-flex flex-row flex-nowrap align-items-center justify-content-around">
                            <i className="flaticon-video-player"></i>
                            <div className="TextContent">
                                <h5>Responsive Noise Blocking</h5>
                                <p>Pure ANC continuously pinpoints and blocks external sounds while automatically responding to individual fit and music playback.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FeatureSec;