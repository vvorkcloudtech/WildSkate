import React, { Component} from "react";
import Home from "./Home";
import ColorSec from './ColorSec';
class Index extends Component{
    render(){
        return(
            <div>
                <Home />
                <ColorSec />
            </div>
        )
    }
}
export default Index;